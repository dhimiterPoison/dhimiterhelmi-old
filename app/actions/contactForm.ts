"use server"

export const sendMail = async (data:FormData) => {
	console.log("sendMail", data)
	const subject = data.get("subject");
	const content = data.get("content");
	console.log("sendMail", content);

	let link = "mailto:dhimiter.helmi@gmail.com"
             + "?subject=" + escape(subject?.toString() || "")
             + "&body=" + escape(content?.toString() || "")
    ;
console.log("link", link)
	return {success: true, message: link};
}