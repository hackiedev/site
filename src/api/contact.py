import smtplib
import ssl

from fastapi import Body, FastAPI, status
from pydantic import BaseModel, Field

app = FastAPI()


class Contact(BaseModel):
    name: constr(min_length=2, max_length=20)
    email: EmailStr
    services: List[str]
    description: constr(min_length=30, max_length=500)

    def to_email_body(self) -> str:
        return ""


@app.post("/")
async def contact_form(contact: Contact):
    with smtplib.SMTP_SSL(
        "smtp.gmail.com", 465, context=ssl.create_default_context()
    ) as server:
        server.login("my@gmail.com", password)
        server.sendmail(sender_email, receiver_email, contact.to_email_body())

    return Response(status_code=HTTP_201_CREATED)
