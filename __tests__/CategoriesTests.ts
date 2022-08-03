import _CategoryGroups from '../categories/CategoryGroups.json'
import _SavingsGoalCategories from '../categories/SavingsGoalCategories.json'
import _WithdrawCategories from '../categories/WithdrawCategories.json'
import _DepositCategories from '../categories/DepositCategories.json'
import _TaskCategories from '../categories/TaskCategories.json'

const CategoryGroups = _CategoryGroups as Record<string, any>;
const SavingsGoalCategories = _SavingsGoalCategories as Record<string, any>;
const WithdrawCategories = _WithdrawCategories as Record<string, any>;
const DepositCategories = _DepositCategories as Record<string, any>;
const TaskCategories = _TaskCategories as Record<string, any>;

let categoryGroupArray: Array<string> = []
Object.keys(CategoryGroups).forEach(function (key) {
  categoryGroupArray.push((CategoryGroups)[key])
})

// Make a simple array of ids for easy compairing
let SavingsGoalCategoryIds: Array<string> = []
Object.keys(SavingsGoalCategories).forEach(function (key) {
  SavingsGoalCategoryIds.push(SavingsGoalCategories[key].id)
})

let WithdrawCategoryIds: Array<string> = []
Object.keys(WithdrawCategories).forEach(function (key) {
  WithdrawCategoryIds.push(WithdrawCategories[key].id)
})

let DepositCategoryIds: Array<string> = []
Object.keys(DepositCategories).forEach(function (key) {
  DepositCategoryIds.push(DepositCategories[key].id)
})

let TaskCategoryIds: Array<string> = []
Object.keys(TaskCategories).forEach(function (key) {
  TaskCategoryIds.push(TaskCategories[key].id)
})

describe('CategoriesTest', () => {
  it('All categories must have an id', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let id = SavingsGoalCategories[key].id
      expect(id).toEqual(expect.anything())
    })

    Object.keys(WithdrawCategories).forEach(function (key) {
      let id = WithdrawCategories[key].id
      expect(id).toEqual(expect.anything())
    })

    Object.keys(DepositCategories).forEach(function (key) {
      let id = DepositCategories[key].id
      expect(id).toEqual(expect.anything())
    })

    Object.keys(TaskCategories).forEach(function (key) {
      let id = TaskCategories[key].id
      expect(id).toEqual(expect.anything())
    })
  })

  it('All categories must have a color', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let color = SavingsGoalCategories[key].color
      expect(color).toEqual(expect.anything())
    })

    Object.keys(WithdrawCategories).forEach(function (key) {
      let color = WithdrawCategories[key].color
      expect(color).toEqual(expect.anything())
    })

    Object.keys(DepositCategories).forEach(function (key) {
      let color = DepositCategories[key].color
      expect(color).toEqual(expect.anything())
    })

    Object.keys(TaskCategories).forEach(function (key) {
      let color = TaskCategories[key].color
      expect(color).toEqual(expect.anything())
    })
  })

  it('All categories must have an image', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let image = SavingsGoalCategories[key].image
      expect(image).toEqual(expect.anything())
    })

    Object.keys(WithdrawCategories).forEach(function (key) {
      let image = WithdrawCategories[key].image
      expect(image).toEqual(expect.anything())
    })

    Object.keys(DepositCategories).forEach(function (key) {
      let image = DepositCategories[key].image
      expect(image).toEqual(expect.anything())
    })

    Object.keys(TaskCategories).forEach(function (key) {
      let image = TaskCategories[key].image
      expect(image).toEqual(expect.anything())
    })
  })

  it('All category images must start with /', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let image = SavingsGoalCategories[key].image
      expect(image.charAt(0)).toEqual('/')
    })

    Object.keys(WithdrawCategories).forEach(function (key) {
      let image = WithdrawCategories[key].image
      expect(image.charAt(0)).toEqual('/')
    })

    Object.keys(DepositCategories).forEach(function (key) {
      let image = DepositCategories[key].image
      expect(image.charAt(0)).toEqual('/')
    })

    Object.keys(TaskCategories).forEach(function (key) {
      let image = TaskCategories[key].image
      expect(image.charAt(0)).toEqual('/')
    })
  })

  it('Category ids must be unique in SavingsGoalCategories', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let id = SavingsGoalCategories[key].id
      SavingsGoalCategoryIds.splice(SavingsGoalCategoryIds.indexOf(id), 1)
      expect(SavingsGoalCategoryIds).not.toContain(id)
    })
  })

  it('Category ids must be unique in WithdrawCategories', () => {
    Object.keys(WithdrawCategories).forEach(function (key) {
      let id = WithdrawCategories[key].id
      WithdrawCategoryIds.splice(WithdrawCategoryIds.indexOf(id), 1)
      expect(WithdrawCategoryIds).not.toContain(id)
    })
  })

  it('Category ids must be unique in DepositCategories', () => {
    Object.keys(DepositCategories).forEach(function (key) {
      let id = DepositCategories[key].id
      DepositCategoryIds.splice(DepositCategoryIds.indexOf(id), 1)
      expect(DepositCategoryIds).not.toContain(id)
    })
  })

  it('Category ids must be unique in TaskCategories', () => {
    Object.keys(TaskCategories).forEach(function (key) {
      let id = TaskCategories[key].id
      TaskCategoryIds.splice(TaskCategoryIds.indexOf(id), 1)
      expect(TaskCategoryIds).not.toContain(id)
    })
  })

  it('CategoryGroup must exist in CategoryGroups object or be undefined', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let categoryGroup = SavingsGoalCategories[key].categoryGroup
      if (categoryGroup) expect(categoryGroupArray).toContain(categoryGroup)
    })

    Object.keys(WithdrawCategories).forEach(function (key) {
      let categoryGroup = WithdrawCategories[key].categoryGroup
      if (categoryGroup) expect(categoryGroupArray).toContain(categoryGroup)
    })

    Object.keys(DepositCategories).forEach(function (key) {
      let categoryGroup = DepositCategories[key].categoryGroup
      if (categoryGroup) expect(categoryGroupArray).toContain(categoryGroup)
    })

    Object.keys(TaskCategories).forEach(function (key) {
      let categoryGroup = TaskCategories[key].categoryGroup
      if (categoryGroup) expect(categoryGroupArray).toContain(categoryGroup)
    })
  })
})
