const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project');

const sendEmail = (e) => {
    e.preventDefault()
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        alert('Malumot kiriting')
    } {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_ec8q8pa', 'template_nxe53la', '#contact-form', 'vO_KhRCIOrb5_IrnA')
            .then(() => {
                alert("Ma'lumotlar yuborildi");
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)