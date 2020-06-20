import smtplib
import ssl
from typing import List

from fastapi import FastAPI
from fastapi.openapi.models import Response
from pydantic import BaseModel, constr, EmailStr
from starlette.status import HTTP_201_CREATED

app = FastAPI()


class Contact(BaseModel):
    name: constr(min_length=2, max_length=20)
    email: EmailStr
    services: List[str]
    description: constr(min_length=30, max_length=500)

    def to_email_body(self) -> str:
        return ""


@app.post("/api/contact")
async def contact(contact: Contact):
    with smtplib.SMTP_SSL(
        "smtp.gmail.com", 465, context=ssl.create_default_context()
    ) as server:
        server.login("my@gmail.com", password)
        server.sendmail(sender_email, receiver_email, contact.to_email_body())

    return Response(status_code=HTTP_201_CREATED)
