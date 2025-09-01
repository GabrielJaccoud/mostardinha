export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const dc = process.env.MAILCHIMP_DC;
  const listId = process.env.MAILCHIMP_LIST_ID;

  if (!apiKey || !dc || !listId) {
    return res.status(500).json({ error: 'Configuração do servidor incompleta' });
  }

  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed' // Ou 'pending' para confirmação por email
      })
    });

    const data = await response.json();
    if (response.ok) {
      return res.status(200).json({ message: 'Inscrito com sucesso!' });
    } else {
      return res.status(response.status).json({ error: data.detail || 'Erro ao inscrever' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erro no servidor' });
  }
}
