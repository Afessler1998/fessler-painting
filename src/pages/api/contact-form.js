export default function handler(req, res) {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    //perform server side validation
    //email me the contact info

    console.log(firstName, lastName, phoneNumber, email, message);

    res.status(200).json({ data: 'success' });
}