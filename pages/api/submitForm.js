import admin from "firebase-admin";

// Initialize the Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: "service_account",
      project_id: "hablalo-app",
      private_key_id: "55f364703566d58831bb3dcbbf6c0d6ecb88db10",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGHv12oLOV7snN\nU6Wa5idWY1ZsW7U1bIjo7wec+DaNYv8Ewz9IBNmp2wuFOiVjYbjqGlln9/V8wgpg\nUqNSBAyVk+1lB6V9wjfte7kW5tlZLBd3+Q+tuCz1zGM2nUshq/edJRb82T8A70k8\nLk111dLHRbilQQ8EH5Bs+9ndofr3j2fl+qkoZ/OkbuScdXK7PslVV3vkYzgY4nOb\nmmMyyIYEvu25+XHG//2+N0s05jcz09Ow0tdqgWVg2zA1wae9MisS7lxqdJURXhTm\nzCHWxf9EP0SK7wOmZKiXAtWATIq5QBrBzrMMaxZrfFFT6hHBButdtl6bS3q0M8xZ\n9D9dRLFvAgMBAAECggEAHg5bg3X+aJ47l95lvunFnqceraeoBlJ7NA33M2AQiUMz\nJFopLS2B2/Ey0+OuAmAJOTKwIkQNcP97ACvpQlWs7GWZsScHezGjYcV69IzRp7k3\nAj4S8Swss0luOmiDGmOdWAYQG7cq22McfXhvdeiaER3JqlWusoBwslKZiwm6KiN0\nrXoslEomvxvqBwn8bbkiJuMlpzHtTKPXNPWlHbpByBtu+3CSzh/W0z5SLd9SC1mB\nAvklI8AYyAPcg5g556cp4nsG8EVIkd/5ftz/929L4VPezVFxad7Jn5IKQJy5xMPY\nRx0ymr6+EDNV1RJ+omWDvvLXJbPKbjJ/qQu5HcmBqQKBgQDkOoCNqcztJL1+aBHa\nu5GpAeJ73RpMwDIH2x3o7BrKoeNmbkfPFNfPfWDdwpSsGDqQnju0uqhHzPjZP+ik\nhgGb6sbIL5+FpPX/blZVMCJFlhdEjbNIAshWP5trUT7ALC24AvZoxFXVCTg/L3Mt\nueFPVry7Ac/++8oLzbfkXnKhkwKBgQDeOp3aee0gtm80d+a1zBZsclJfJKPtb0RX\nX3Grf2JlXkcAF/oETI3UEkWiB0/n/bdg4IgCeDvffsVgTctGmAlbLgk+vuqQeIUk\n9UjdNpNMWnRQq+ecalCo7tS0WTACfWjW5eA8jO8iqtlk4QVN9/OTlkR8yFigABKs\np+w0b9CKNQKBgE3gtJsidN366npm0qjb1lFgZkMz6FSGRMwvdd5UKrQ4V5tNSE2e\nZCHWO6aQTiEHR3yvsdny05dklwmy6BSz8Xqdu2T18y4sYxDdOrJo8VjjZV8sJyAM\nawYbQFJ3b70tlhAzWpfXXx6Jvdq5u0jAI+TpyQ7bCHmOu5wZf4V6wQznAoGAQs3S\nKBwg+YV+FoK4uwvX7c/MDUfhc33QSIerjwdjF9/obhHHGcW9mPPJNPUHw1CU8K1u\nlXd5YC0mvlWEdvs7TMqhAti3gKiKNdr6hW1jiD9k2d9jZ7TZ/H6XOIPbF9SFUJyX\n9PvU41ICuf2e75pLAaHZgr1jTu3Wr0pnijfWs8UCgYEA2uovWfXAKdPtnbjHHNiR\n/j15zy38vk34QFS0b7jklX8Urdc1C3V6LPdbQTXDpN9ARwOYSsZIER7LD6TS20zu\n6fmLXNDoJ8ic8N+W48RMC4W/aPjoERe30SU5H9eN7fl95JT8AnBV+ixyp3bgFeUn\nlwCq2VdKkXmCSKcWPidB9Rs=\n-----END PRIVATE KEY-----\n",
      client_email: "reporting-tool@hablalo-app.iam.gserviceaccount.com",
      client_id: "101897451128822487057",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-g6ads%40hablalo-app.iam.gserviceaccount.com",
      universe_domain: "googleapis.com",
    }),
    databaseURL: "https://your-project-id.firebaseio.com",
  });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body; // data enviada desde el json (cliente)
      const docRef = await admin
        .firestore()
        .collection("pruebaOnboarding")
        .add(data);
      res.status(200).json({ id: docRef.id });
    } catch (error) {
      console.error("Error saving document: ", error);
      res.status(500).json({ error: "Failed to save document" });
    }
  } else {
    //no permitir otros metodos
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
