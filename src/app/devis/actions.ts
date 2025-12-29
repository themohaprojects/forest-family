'use server';

export async function submitDevis(formData: FormData) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        terrainSize: formData.get('terrainSize'),
        treeCount: formData.get('treeCount'),
        treeHeight: formData.get('treeHeight'),
        message: formData.get('message'),
    };

    // In a real app, send email here via Resend/SendGrid/Nodemailer
    console.log('--- NOUVEAU DEVIS REÇU ---');
    console.log(rawData);
    console.log('--------------------------');

    return { success: true, message: 'Votre demande a bien été envoyée !' };
}
