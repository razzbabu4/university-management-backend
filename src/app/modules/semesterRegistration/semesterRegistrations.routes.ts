import { Router } from "express";
import validateRequest from "../middlewares/validateRequest";
import { SemesterRegistrationValidations } from "./semesterRegistrations.validation";
import { SemesterRegistrationController } from "./semesterRegistrations.controller";

const router = Router();

router.post(
    '/create-semester-registration',
    validateRequest(
        SemesterRegistrationValidations.createSemesterRegistrationValidationSchema,
    ),
    SemesterRegistrationController.createSemesterRegistration,
);

router.get('/', SemesterRegistrationController.getAllSemesterRegistration);
router.get(
    '/:id',
    SemesterRegistrationController.getSingleSemesterRegistration,
);
router.patch(
    '/:id',
    SemesterRegistrationController.updateSingleSemesterRegistration,
);

export const SemesterRegistrationRoutes = router;