# 🚀 Autonomous Intelligent Routing Engine

Where **Empathy Meets Engineering** – a fully adaptive, intelligent triage and routing system powered by conversational AI, dynamic automation, and contextual understanding.

## 🌟 Overview

`autonomous-intelligent-routing` is an AI-powered helpdesk triage engine that does more than just react — it **anticipates, learns, and evolves**. Designed to transform traditional ticketing systems into responsive, intelligent, and human-centric platforms, this system uses a combination of conversational AI, intelligent search, and large language models (LLMs) to route issues with **surgical precision**.

At the core of the system lies a feedback loop that continuously absorbs new workflows, documents, and interactions to improve accuracy and performance over time.

---


### What’s included

✅ [**Self-hosted n8n**](https://n8n.io/) - Low-code platform with over 400
integrations and advanced AI components

✅ [**Ollama**](https://ollama.com/) - Cross-platform LLM platform to install
and run the latest local LLMs

✅ [**Qdrant**](https://qdrant.tech/) - Open-source, high performance vector
store with an comprehensive API

✅ [**PostgreSQL**](https://www.postgresql.org/) -  Workhorse of the Data
Engineering world, handles large amounts of data safely.


## Installation

### Cloning the Repository

```bash
git clone https://github.com/NextGenOps-Reboot/autonomous-intelligent-routing.git
cd autonomous-intelligent-routing

```


## 🚦 Workflow Description

1. ### User Request Initiation  
   A user submits a request via chatbot (Rasa).
2. ### Intent Recognition & Routing  
   Rasa interprets the intent and sends the data to n8n.
3. ### Knowledge Check  
   Haystack queries Bookstack to locate an existing answer.
4. ### Auto-Resolve or Escalate  
   - If found → Response delivered → Ticket auto-assigned or closed.  
   - If not found → LLM generates a draft solution → Ticket is created and routed.
5. ### Learning & Feedback  
   New solutions are validated and added to Bookstack.  
   The system adapts over time based on usage patterns and resolutions.


🤝 Contributing
We welcome contributions! Please see CONTRIBUTING.md for guidelines on how to get started.



**_This is not just automation. It’s an intelligent, evolving helpdesk engine — built for the future. ✨_**


---
