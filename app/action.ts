"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "./db"

export async function postEntry(formData: FormData) {
    "use server"

    const data = await prisma.guestbook.create({
        data: {
            username: (formData.get("username") || "Anonymous").toString(),
            message: (formData.get("message") || "No message").toString(),
        }
    })

    revalidatePath("/guestbook")
}