/* Bidii Tea floating WhatsApp enquiry button.
   Change WHATSAPP_NUMBER to the official sales number when ready.
   Add <script src="js/whatsapp-widget.js" defer></script> to each page. */
(() => {
  "use strict";
  const WHATSAPP_NUMBER = "254114346235"; // Temporary testing number
  const PREFILLED_MESSAGE = "Hello Bidii Tea Sales Team, I'm interested in your tea products and would like to make an enquiry.";
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  function mount() {
    if (document.getElementById("bidii-whatsapp-widget")) return;
    const style = document.createElement("style");
    style.id = "bidii-whatsapp-widget-styles";
    style.textContent = `
      .bidii-wa-widget{position:fixed;right:22px;bottom:24px;z-index:9999;display:flex;align-items:center;gap:10px;font-family:Arial,Helvetica,sans-serif}
      .bidii-wa-label{background:#fff;color:#073e2c;font-size:13px;font-weight:700;line-height:1.2;padding:12px 15px;border:1px solid #e9e2d6;border-radius:25px;box-shadow:0 4px 18px rgba(0,0,0,.14);white-space:nowrap}
      .bidii-wa-button{display:flex;align-items:center;justify-content:center;width:96px;height:56px;gap:8px;border-radius:32px;background:#25d366;color:white;box-shadow:0 5px 18px rgba(0,0,0,.23);text-decoration:none;transition:transform .2s,box-shadow .2s}
      .bidii-wa-button:hover,.bidii-wa-button:focus-visible{transform:translateY(-3px);box-shadow:0 7px 24px rgba(0,0,0,.27)}
      .bidii-wa-button:focus-visible{outline:3px solid #c7a24b;outline-offset:4px}
      .bidii-wa-button svg{width:27px;height:27px;fill:currentColor;flex-shrink:0}
      .bidii-wa-chat-text{color:#fff;font-size:14px;font-weight:700;line-height:1}
      @media(max-width:480px){.bidii-wa-widget{right:14px;bottom:16px;gap:7px}.bidii-wa-button{width:92px;height:52px}.bidii-wa-label{font-size:12px;padding:10px 12px}}
      @media(prefers-reduced-motion:reduce){.bidii-wa-button{transition:none}}
    `;
    document.head.appendChild(style);

    const wrapper = document.createElement("div");
    wrapper.className = "bidii-wa-widget";
    wrapper.id = "bidii-whatsapp-widget";


    const link = document.createElement("a");
    link.className = "bidii-wa-button";
    link.href = WHATSAPP_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "Chat with Bidii Tea sales team on WhatsApp (opens a new tab)");
    link.title = "Chat with Bidii Tea on WhatsApp";
    // WhatsApp logo SVG, inline to avoid any external asset dependency.
    link.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16 .8A15.1 15.1 0 0 0 3 23.5L.8 31.2l7.9-2.1A15.2 15.2 0 1 0 16 .8Zm0 27.6c-2.4 0-4.7-.7-6.7-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A12.3 12.3 0 1 1 16 28.4Zm6.8-9.2c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.3s1.5 3.8 1.7 4c.2.3 2.9 4.4 7.1 6.1 1 .4 1.8.6 2.4.8 1 .3 1.9.3 2.6.2.8-.1 2.3-1 2.6-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5Z"/></svg><span class="bidii-wa-chat-text">Chat</span>`;
    wrapper.append(link);
    document.body.appendChild(wrapper);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount, {once:true});
  else mount();
})();
