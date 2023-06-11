import { unstable_parseMultipartFormData, unstable_createMemoryUploadHandler } from "@remix-run/cloudflare"
import type { ActionArgs, AppLoadContext } from "@remix-run/cloudflare"

const mimeTypes = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword",
  "application/pdf"
]

const extensions = ["docx", "doc", "pdf"]

export const handleUpload = async (request: Request, context: AppLoadContext) => {
  const encoded = btoa(`${context.MAILJET_API_KEY}:${context.MAILJET_SECRET_KEY}`)

  const formData = await unstable_parseMultipartFormData(request, unstable_createMemoryUploadHandler({
    maxPartSize: 1_000_000
  }))

  const file: any = formData.get("cv")

  if(!mimeTypes.includes(file.type)) {
    return {
      error: true,
      errorMessage: 'Incorrect file type - please upload a Word Document or PDF.'
    }
  }

  if(file.size > 1000000) {
    return {
      error: true,
      errorMessage: 'You have exceeded the file size limit. Please upload a smaller file.'
    }
  }

  const buffer = await file.arrayBuffer()
  let binary = ''
	const bytes = new Uint8Array(buffer)
	const len = bytes.byteLength;
	for (let i = 0; i < len; i++) {
		binary += String.fromCharCode( bytes[ i ] )
	}
  const base64Encoded = btoa(binary)

  const mimeIndex = mimeTypes.findIndex(element => element === file.type)
  const mimeType = mimeTypes[mimeIndex]
  const extension = extensions[mimeIndex]

  const date = new Date()
  const filename = `cv_upload_${date.getDate()}_${date.getMonth()}_${date.getFullYear()}_${date.getHours()}_${date.getMinutes()}.${extension}`

  try {
    let response = fetch("https://api.mailjet.com/v3/send", {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${encoded}`
      },
      body: JSON.stringify({
        "Messages": [
          {
            "FromEmail": "enablingfutures@roninjs.co.uk",
            "FromName": "Enabling Futures Website",
            "Subject": "CV from website",
            "Sender": true,
            "Recipients": [
              {
                "Email": "roninfrodsham@gmail.com",
                "Name": "Jonny Frodsham",
                "Vars": "array"
              }
            ],
            "Attachments": [
              {
                "Filename": filename,
                "Content-type": mimeType,
                "Content": base64Encoded
              }
            ],
          }
        ]
      })
    })

    return response

  } catch(error) {
    return {
      error: true,
      errorMessage: error
    }
  }
  // fetch("https://api.mailjet.com/v3/send", {
  //   method : 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Basic ${encoded}`
  //   },
  //   body: JSON.stringify({
  //       "Messages": [
  //           {
  //               "FromEmail": "enablingfutures@roninjs.co.uk",
  //               "FromName": "Enabling Futures Website",
  //               "Subject": "CV from website",
  //               "Sender": true,
  //               "Recipients": [
  //                   {
  //                       "Email": "roninfrodsham@gmail.com",
  //                       "Name": "Jonny Frodsham",
  //                       "Vars": "array"
  //                   }
  //               ],
  //               "Attachments": [
  //                   {
  //                       "Filename": filename,
  //                       "Content-type": mimeType,
  //                       "Content": base64Encoded
  //                   }
  //               ],
  //           }
  //       ]
  //   })
  // })
  // .then( resp => resp.json())
  // .then(data => {
  //   console.log('Mailjet Response', data)
  // })
  // .catch(err => {
  //   console.log("MAIL SEND ERROR", err)
  // })

  // return {
  //   success: 'Thank you for uploading your CV. We will be in touch.'
  // }

}