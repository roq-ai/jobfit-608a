import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  job_id: yup.string().nullable().required(),
});
