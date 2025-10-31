type Mods = Record<string, boolean | string | undefined>;

export const classNames = (cls: string, mods: Mods = {}, additional: (string | undefined)[] = []): string => {
  return [cls, ...additional.filter(Boolean), ...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([cls, _]) => cls)].join(" ");
  // return `${cls} ${additional.join(" ")} ${Object.entries(mods).filter(([cls, value]) => Boolean(value)).map(([cls, value]) => cls)}`;
};
