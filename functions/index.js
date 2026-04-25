/* eslint-env node */
const { onCall } = require('firebase-functions/v2/https')
const admin = require('firebase-admin')

admin.initializeApp()
const db = admin.firestore()

exports.generateCertificate = onCall(async (request) => {
  const { studentId } = request.data || {}
  if (!studentId) {
    throw new Error('studentId is required')
  }

  const studentSnap = await db.collection('students').doc(studentId).get()
  if (!studentSnap.exists) {
    throw new Error('Student not found')
  }

  const student = studentSnap.data()
  return {
    message: 'Certificate data generated',
    certificate: {
      school: 'GBELS Yar Muhammad Mangrio (Semiscode: 405050083)',
      studentName: student.name,
      className: student.className,
      issueDate: new Date().toISOString(),
    },
  }
})
