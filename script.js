function submitForm() {
    const subject = document.getElementById('subject').value;
    const complainant = document.getElementById('complainant').value;
    const feedback = document.getElementById('feedback').value;

    if (!subject || !complainant || !feedback) {
        alert("Please fill all the required fields.");
    } else {
        document.getElementById('complaintForm').reset();
        document.getElementById('submittedMessage').classList.remove('hidden');
    }
}
