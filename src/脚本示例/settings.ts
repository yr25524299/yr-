const Settings = z
  .object({
    button_selected: z.boolean().default(false),
  })
  .prefault({});

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref(validateInplace(Settings, getVariables({ type: 'script', script_id: getScriptId() })));

  watch(
    settings,
    new_settings => {
<<<<<<< HEAD
      insertOrAssignVariables(toRaw(new_settings), { type: 'script', script_id: getScriptId() });
=======
      insertOrAssignVariables(klona(new_settings), { type: 'script', script_id: getScriptId() });
>>>>>>> a1441794e40127d7ba87fb943678b2574eff0b8b
    },
    { immediate: true, deep: true },
  );
  return {
    settings,
  };
});

function validateInplace<T>(schema: z.ZodType<T>, data: unknown): T {
  const result = parsePrettified(schema, data);
  return _.assign(data, result) as T;
}

function parsePrettified<T>(schema: z.ZodType<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw Error(z.prettifyError(result.error));
  }
  return result.data;
}
<<<<<<< HEAD
=======

>>>>>>> a1441794e40127d7ba87fb943678b2574eff0b8b
