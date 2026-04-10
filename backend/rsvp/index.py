import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """Сохраняет анкету гостя свадьбы в базу данных."""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"})}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    attending = body.get("attending")
    guests_count = int(body.get("guests_count", 1))
    menu = body.get("menu", "standard")
    wishes = body.get("wishes", "").strip()

    if not name or attending is None:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Имя и подтверждение обязательны"})}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO wedding_rsvp (name, attending, guests_count, menu, wishes) VALUES (%s, %s, %s, %s, %s)",
        (name, attending, guests_count, menu, wishes)
    )
    conn.commit()
    cur.close()
    conn.close()

    return {"statusCode": 200, "headers": headers, "body": json.dumps({"ok": True})}
