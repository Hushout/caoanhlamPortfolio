async function sendDiscordMessage(name: string, email: string, message: string) {
    const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
        console.error('Discord webhook URL is not defined in the environment variables.');
        return;
    }

    try {
        const payload = {
            content: null,
            embeds: [
                {
                    title: "Nouvelle demande",
                    description: `**🧑ㆍNom** : ${name}\n**💌ㆍEmail** : ${email}\n\`\`\`${message}\`\`\``,
                    color: 14380553
                }
            ],
            attachments: []
        };

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Failed to send message: ${response.statusText}`);
        }

        console.log('Message sent successfully to Discord webhook!');
    } catch (error: any) {
        console.error('Error sending message to Discord webhook:', error.message);
    }
}

export default sendDiscordMessage;