import { expect, test } from '@playwright/test'

for (const width of [320, 390]) {
  test(`the menu label stays clear of its close button at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 })
    await page.goto('/')
    await page.getByRole('button', { name: 'Open Menu' }).click()
    const menu = page.getByRole('dialog', { name: 'Menu', exact: true })
    const label = await menu.getByText('Valencia Agents', { exact: true }).boundingBox()
    const close = await menu.getByRole('button', { name: 'Close', exact: true }).boundingBox()
    expect(label).not.toBeNull()
    expect(close).not.toBeNull()
    expect((label?.x ?? 0) + (label?.width ?? 0) + 12).toBeLessThanOrEqual(close?.x ?? 0)
  })
}

test('mobile controls have generous targets without overflowing the page', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  const undersized = () =>
    page.locator('a[href], button').evaluateAll((controls) =>
      controls.flatMap((control) => {
        const box = control.getBoundingClientRect()
        if (!box.width || !box.height || control.classList.contains('sr-only')) return []
        return box.width < 44 || box.height < 44
          ? [
              {
                name: control.getAttribute('aria-label') ?? control.textContent,
                width: box.width,
                height: box.height,
              },
            ]
          : []
      }),
    )
  expect(await undersized()).toEqual([])
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  await page.getByRole('button', { name: 'Open Menu' }).click()
  await expect(page.getByRole('dialog', { name: 'Menu', exact: true })).toBeVisible()
  expect(await undersized()).toEqual([])
})

test('controls only transition explicit properties', async ({ page }) => {
  await page.goto('/')
  const broad = () =>
    page.locator('a, button').evaluateAll((controls) =>
      controls.flatMap((control) => {
        const style = getComputedStyle(control)
        return style.transitionProperty === 'all' && style.transitionDuration !== '0s'
          ? [control.getAttribute('aria-label') ?? control.textContent]
          : []
      }),
    )
  expect(await broad()).toEqual([])
  await page.setViewportSize({ width: 390, height: 844 })
  await page.getByRole('button', { name: 'Open Menu' }).click()
  await expect(page.getByRole('dialog', { name: 'Menu', exact: true })).toBeVisible()
  expect(await broad()).toEqual([])
})

test('reduced motion stops animation without hiding meaningful content', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  expect(
    await page.evaluate(
      () =>
        document.getAnimations().filter((animation) => animation.playState === 'running').length,
    ),
  ).toBe(0)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('a question opens its answer and the plus turns into a cross', async ({ page }) => {
  await page.goto('/')
  const first = page.locator('#faq details').first()
  await expect(first).not.toHaveAttribute('open')
  await first.locator('summary').click()
  await expect(first).toHaveAttribute('open', '')
  await expect(first.locator('p')).toBeVisible()
})
