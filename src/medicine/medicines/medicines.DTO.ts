export class MedicinesDTO {
    readonly id_medicine: number;
    readonly id_farmacy: string;
    readonly name: string;
    readonly description: string;
    readonly stock: number;
    readonly category: string;
    readonly price: number;
    readonly image: string;
    readonly expirationDate: Date;
}