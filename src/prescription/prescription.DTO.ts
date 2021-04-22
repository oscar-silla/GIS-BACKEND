export class PrescriptionDTO {
    readonly id_prescription: number;
    readonly id_patient: string;
    readonly id_doctor: string;
    readonly date: Date;
    readonly history: string;
}