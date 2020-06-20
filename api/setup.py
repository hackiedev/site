from setuptools import find_packages, setup

install_requires = [
    "email-validator~=1.1.1",
    "fastapi~=0.58.0",
    "gunicorn~=20.0.4",
    "pydantic~=1.5.1",
    "uvicorn~=0.11.5",
]

dev_requires = [
    "black>=19.10b0",
    "flake8>=3.8.0a2",
    "isort>=4.3.21",
]


setup(
    name="app",
    version="0.0.1",
    packages=find_packages(),
    install_requires=install_requires,
    python_requires=">=3.6",
    extras_require={"dev": dev_requires},
)
