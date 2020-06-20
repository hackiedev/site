import os
import smtplib
import ssl
from html import escape
from typing import List

from fastapi import FastAPI
from pydantic import BaseModel, EmailStr, constr
from starlette.responses import Response
from starlette.status import HTTP_201_CREATED

app = FastAPI()

COMPANY_EMAIL: str = "hackie.dev@gmail.com"


class Contact(BaseModel):
    name: constr(min_length=2, max_length=20)
    email: EmailStr
    services: List[str]
    description: constr(min_length=30, max_length=500)

    def to_email_body(self) -> str:
        return f"""\\
From: {self.email}
Subject: {self.email} has fullfilled the site form

NAME: '{self.name}'
EMAIL: '{self.email}'
SERVICES: '{self.services}'
DESCRIPTION: '{escape(self.description)}'
"""


@app.post("/api/contact")
async def contact(contact: Contact):
    with smtplib.SMTP_SSL(
        "smtp.gmail.com", 465, context=ssl.create_default_context()
    ) as server:
        server.login(COMPANY_EMAIL, os.environ["GMAIL_PASSWORD"])
        server.sendmail(COMPANY_EMAIL, COMPANY_EMAIL, contact.to_email_body())
    return Response(status_code=HTTP_201_CREATED)
