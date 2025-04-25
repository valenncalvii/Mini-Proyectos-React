export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const; // as const makes the object readonly and infers the type of the keys as string literals

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: "todos",
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: "active",
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: "completed",
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
} as const; // as const makes the object readonly and infers the type of the keys as string literals
