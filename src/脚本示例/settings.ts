const Settings = z
  .object({
    button_selected: z.boolean().default(false),
  })
  .prefault({});

export const useSettingsStore = defineStore('settings', () => {
<<<<<<< HEAD
  const settings = ref(validateInplace(Settings, getVariables({ type: 'script', script_id: getScriptId() })));
=======
  const settings = ref(Settings.parse(getVariables({ type: 'script', script_id: getScriptId() })));
>>>>>>> 8a7784da27b488f9d699bd42ec7ea0de1a886aa4

  watch(
    settings,
    new_settings => {
<<<<<<< HEAD
      insertOrAssignVariables(toRaw(new_settings), { type: 'script', script_id: getScriptId() });
=======
      insertOrAssignVariables(klona(new_settings), { type: 'script', script_id: getScriptId() });
>>>>>>> 8a7784da27b488f9d699bd42ec7ea0de1a886aa4
    },
    { immediate: true, deep: true },
  );
  return {
    settings,
  };
});
<<<<<<< HEAD

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
=======
>>>>>>> 8a7784da27b488f9d699bd42ec7ea0de1a886aa4
