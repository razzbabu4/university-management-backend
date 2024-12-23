import { Router } from 'express';
import validateRequest from '../middlewares/validateRequest';
import { SemesterRegistrationValidations } from './semesterRegistrations.validation';
import { SemesterRegistrationController } from './semesterRegistrations.controller';

const router = Router();

router.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegistrationValidations.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.createSemesterRegistration,
);
router.patch(
  '/:id',
  validateRequest(
    SemesterRegistrationValidations.updateSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.updateSingleSemesterRegistration,
);
router.get(
  '/:id',
  SemesterRegistrationController.getSingleSemesterRegistration,
);
router.delete(
  '/:id',
  SemesterRegistrationController.deleteSingleSemesterRegistration,
);
router.get('/', SemesterRegistrationController.getAllSemesterRegistration);

export const SemesterRegistrationRoutes = router;
