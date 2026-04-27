import { test, expect } from '@playwright/test'

test.describe('Orders', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/orders')
    await page.waitForSelector('table', { timeout: 10000 })
    await expect(page.locator('.loading')).toHaveCount(0)
  })

  test('displays orders table with data', async ({ page }) => {
    const table = page.locator('table').first()
    await expect(table).toBeVisible()
    await expect(table.getByRole('columnheader', { name: 'Order Number' })).toBeVisible()
    await expect(table.getByRole('columnheader', { name: 'Status' })).toBeVisible()
    const rows = await table.getByRole('row').count()
    expect(rows).toBeGreaterThan(1)
  })

  test('displays orders summary heading and stats', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /All Orders/ })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Status' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Order Date' })).toBeVisible()
  })

  test('status filter shows only matching orders', async ({ page }) => {
    const statusFilter = page.locator('select').nth(3)
    await statusFilter.selectOption('Delivered')
    await page.waitForTimeout(500)
    const rows = page.locator('table tbody tr')
    const count = await rows.count()
    expect(count).toBeGreaterThan(0)
    for (let i = 0; i < count; i++) {
      await expect(rows.nth(i)).toContainText('Delivered')
    }
  })

  test('warehouse filter reduces order count', async ({ page }) => {
    const allCount = await page.locator('table tbody tr').count()
    await page.locator('select').nth(1).selectOption('London')
    await page.waitForTimeout(500)
    const filteredCount = await page.locator('table tbody tr').count()
    expect(filteredCount).toBeLessThanOrEqual(allCount)
    expect(filteredCount).toBeGreaterThan(0)
  })

  test('month filter reduces order count', async ({ page }) => {
    const allCount = await page.locator('table tbody tr').count()
    await page.locator('select').nth(0).selectOption('January')
    await page.waitForTimeout(500)
    const filteredCount = await page.locator('table tbody tr').count()
    expect(filteredCount).toBeLessThanOrEqual(allCount)
    expect(filteredCount).toBeGreaterThan(0)
  })

  test('combined warehouse and status filter works', async ({ page }) => {
    await page.locator('select').nth(1).selectOption('San Francisco')
    await page.locator('select').nth(3).selectOption('Shipped')
    await page.waitForTimeout(500)
    const rows = page.locator('table tbody tr')
    const count = await rows.count()
    expect(count).toBeGreaterThan(0)
  })
})
