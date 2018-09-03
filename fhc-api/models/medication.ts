/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Code } from './code';
import { CompoundPrescription } from './compoundPrescription';
import { Content } from './content';
import { Duration } from './duration';
import { MedicationRenewal } from './medicationRenewal';
import { Medicinalproduct } from './medicinalproduct';
import { RegimenItem } from './regimenItem';
import { Substanceproduct } from './substanceproduct';


export interface Medication {
    batch?: string;
    beginMoment?: number;
    commentForDelivery?: string;
    compoundPrescription?: string;
    compoundPrescriptionV2?: CompoundPrescription;
    duration?: Duration;
    endMoment?: number;
    instructionForPatient?: string;
    instructionsForReimbursement?: Medication.InstructionsForReimbursementEnum;
    intakeRoute?: Code;
    knownUsage?: boolean;
    medicinalProduct?: Medicinalproduct;
    numberOfPackages?: number;
    options?: { [key: string]: Content; };
    recipeInstructionForPatient?: string;
    regimen?: Array<RegimenItem>;
    renewal?: MedicationRenewal;
    substanceProduct?: Substanceproduct;
    substitutionAllowed?: boolean;
    temporality?: Code;
}
export namespace Medication {
    export type InstructionsForReimbursementEnum = 'PAYING_THIRD_PARTY' | 'FIRST_DOSE' | 'SECOND_DOSE' | 'THIRD_DOSE' | 'CHRONIC_KINDEY_DISEASE' | 'DIABETES_TREATMENT' | 'DIABETES_CONVENTION' | 'NOT_REIMBURSABLE';
    export const InstructionsForReimbursementEnum = {
        PAYINGTHIRDPARTY: 'PAYING_THIRD_PARTY' as InstructionsForReimbursementEnum,
        FIRSTDOSE: 'FIRST_DOSE' as InstructionsForReimbursementEnum,
        SECONDDOSE: 'SECOND_DOSE' as InstructionsForReimbursementEnum,
        THIRDDOSE: 'THIRD_DOSE' as InstructionsForReimbursementEnum,
        CHRONICKINDEYDISEASE: 'CHRONIC_KINDEY_DISEASE' as InstructionsForReimbursementEnum,
        DIABETESTREATMENT: 'DIABETES_TREATMENT' as InstructionsForReimbursementEnum,
        DIABETESCONVENTION: 'DIABETES_CONVENTION' as InstructionsForReimbursementEnum,
        NOTREIMBURSABLE: 'NOT_REIMBURSABLE' as InstructionsForReimbursementEnum
    }
}
