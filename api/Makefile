SOURCES = $(shell find . -name "*.py")

install:
	pip install -r requirements.txt

install-dev: install
	pip install -e ".[dev]"

format: black-format isort-format

black-format:
	black .

isort-format:
	isort --recursive .

lint: isort-lint black-lint flake8-lint

isort-lint:
	isort --check-only --recursive .

black-lint:
	black --check .

flake8-lint:
	flake8 .

test:
	pytest -svvv tests/

freeze:
	CUSTOM_COMPILE_COMMAND="make freeze" pip-compile --no-index --output-file requirements.txt setup.py

freeze-upgrade:
	CUSTOM_COMPILE_COMMAND="make freeze-upgrade" pip-compile --no-index --upgrade --output-file requirements.txt setup.py

.PHONY: install install-dev format black-format isort-format lint isort-lint black-lint flake8-lint test freeze freeze-upgrade