FROM python:3.11-slim
WORKDIR /app

# Copy only requirements first to use Docker cache
# When building from the backend directory the build context is already `backend` so copy the file directly
COPY requirements.txt ./requirements.txt
RUN apt-get update \
  && apt-get install -y --no-install-recommends build-essential gcc g++ libgomp1 libopenblas-dev liblapack-dev \
  && rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir -r requirements.txt

# Copy app code
# Use the current build context (backend/) as the source
COPY . /app/

ENV PYTHONUNBUFFERED=1
EXPOSE 8080

CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8080}"]