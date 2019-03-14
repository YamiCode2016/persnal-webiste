export const generateObjFromForm = forms => {
  let obj = {}
  forms.forEach(form => {
    obj[form.name] = ''
  })
  return obj
}
