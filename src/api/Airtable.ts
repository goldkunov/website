import Airtable from 'airtable';

const airtable = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_TOKEN }).base(import.meta.env.VITE_AIRTABLE_BASE_ID);

export const Questions = async () => {
    const questionsTable = airtable.table("Questions");
    const records = await questionsTable.select().all();
    const questions: Array<any> = [];
    records.forEach(record => {
        if (record && record.fields){
            questions.push({id: record.id, ...record.fields});
            console.log(JSON.stringify(record.fields));
        }
    })
    return questions;
}