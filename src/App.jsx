import { useEffect, useRef, useState } from "react";
import { WaveDivider } from "./Art";
import { IMAGES } from "./images";
import "./App.css";

const PROGRAM = [
  {
    title: "Прибытие и знакомство",
    text: "Прибытие в умный дом площадью 120 кв. м: тишина, свет и безопасное пространство. Знакомство и настройка на запрос: каждая участница формулирует, что хочет отпустить.",
  },
  {
    title: "Баня и чан с елью, грейпфрутом и апельсином",
    text: "Время для тепла, воды и телесного расслабления. Смена температур, аромат ели и цитрусов создают сенсорный ритуал, который помогает переключиться и почувствовать момент.",
  },
  {
    title: "Групповая терапия — 90 минут",
    text: "Лично от ведущей. Безопасное пространство для разговора о том, чем не всегда легко поделиться даже с близкими. Бережный разбор истории участницы с профессиональным взглядом и поиск конкретного инсайта.",
    question: "Что именно держит меня и как это отпустить?",
    note: "Формат не является медицинской помощью; результат у каждой участницы индивидуален.",
  },
  {
    title: "Телесные практики, танцы и тряски",
    text: "Практики для возвращения внимания к телу, мягкого движения и исследования напряжения в плечах, тазу и челюсти — зонах, где часто ощущается внутреннее «надо».",
  },
  {
    title: "Мастер-класс по букету из живых цветов",
    text: "Медитативный процесс: руки заняты, голова отдыхает. Каждая участница создаёт букет и забирает его с собой как напоминание о возможности создавать красоту.",
  },
  {
    title: "Фуршет",
    text: "Изысканные снеки, еда как удовольствие и общение с женщинами, которые понимают и не обесценивают.",
  },
  {
    title: "Финальное чаепитие",
    text: "Чаепитие с низкокалорийными вкусняшками. Символическое завершение: отпустить старый сценарий и сформулировать намерение на Новый год. Тёплый финал — возвращение в повседневность с ощущением обновления.",
  },
];

const scrollToBooking = () =>
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });

function Reveal({ children, className = "", as: Tag = "div", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setShown(true);
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${shown ? "is-shown" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

function Button({ children, onClick, type = "button", ...rest }) {
  return (
    <button className="btn" type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Женский ретрит — на главную">
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse key={a} cx="20" cy="9.5" rx="4.6" ry="8" fill="#b5624d" opacity=".92" transform={`rotate(${a} 20 20)`} />
        ))}
        <circle cx="20" cy="20" r="5.2" fill="#e3b768" />
      </svg>
      <span className="logo__text">Женский<br />ретрит</span>
    </a>
  );
}

function TopBar() {
  return (
    <header className="topbar" id="top">
      <Logo />
      
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <p className="eyebrow">Женский ретрит</p>
        <h1>Ты не устала. Ты просто давно не была там, где о тебе заботятся.</h1>
        <p className="hero__sub">Один день, после которого ты вспомнишь, кто ты есть.</p>
        <p  className="hero__note">
          Не спа-день. Не тренинг. Точка перезагрузки перед главной ночью года.
        </p>
        <Button onClick={scrollToBooking}>Занять место</Button>
      </div>
      <div className="hero__visual">
        <img className="photo photo--main" src={IMAGES.house.src} alt={IMAGES.house.alt} />
        <img className="photo photo--small" src={IMAGES.interior.src} alt={IMAGES.interior.alt} />
      </div>
    </section>
  );
}

function Quote({ children, tone = "light" }) {
  return (
    <Reveal as="section" className={`quote quote--${tone}`}>
      <blockquote>{children}</blockquote>
    </Reveal>
  );
}

function Program() {
  return (
    <section className="program" aria-labelledby="program-title">
      <Reveal>
        <p className="eyebrow">Программа</p>
        <h2 id="program-title">Как проходит день</h2>
      </Reveal>
      <ol className="timeline">
        {PROGRAM.map((s, i) => (
          <Reveal as="li" className="step" key={s.title} delay={(i % 3) * 90}>
            <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {s.question && (
                <p className="step__q">Вопрос для работы: «{s.question}»</p>
              )}
              {s.note && <p className="step__note">{s.note}</p>}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Takeaways() {
  return (
    <section className="takeaways" aria-labelledby="take-title">
      <Reveal className="takeaways__inner">
        <div>
          <p className="eyebrow">Что унесёшь с собой</p>
          <h2 id="take-title">
            Ты уходишь с ощущением «я снова дышу», с конкретным инсайтом, букетом,
            новым кругом общения и ритуалом перехода в Новый год.
          </h2>
        </div>
        <img className="photo takeaways__img" src={IMAGES.cup2.src} alt={IMAGES.cup2.alt} loading="lazy" />
      </Reveal>
    </section>
  );
}

// Адрес приёма заявок задаётся в файле .env (см. .env.example).
// Пока он не указан, форма ничего не отправляет и честно об этом сообщает.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

async function submitBooking(data) {
  if (!ENDPOINT) throw new Error("not_configured");
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name: data.name.trim(), contact: data.contact.trim() }),
  });
  if (!res.ok) throw new Error("request_failed");
}

function Booking() {
  const [form, setForm] = useState({ name: "", contact: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Введите имя (минимум 2 символа)";
    if (form.contact.trim().length < 3) e.contact = "Укажите, как с вами связаться";
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    try {
      await submitBooking(form);
      setStatus("Спасибо! Заявка отправлена.");
      setForm({ name: "", contact: "" });
    } catch (err) {
      setStatus(
        err.message === "not_configured"
          ? "Отправка пока не подключена: данные никуда не переданы."
          : "Не удалось отправить заявку. Попробуйте ещё раз чуть позже."
      );
    }
  };

  const set = (k) => (ev) => setForm({ ...form, [k]: ev.target.value });

  return (
    <section className="booking" id="booking" aria-labelledby="booking-title">
      <Reveal className="booking__inner">
        <h2 id="booking-title">
          Если внутри отозвалось — это уже ответ. Осталось только занять место.
        </h2>
        <p>Количество участниц ограничено, потому что работа с каждой — личная.</p>
        <form onSubmit={onSubmit} noValidate>
          <label>
            Имя
            <input
              value={form.name}
              onChange={set("name")}
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {errors.name && <span id="err-name" className="err">{errors.name}</span>}
          </label>
          <label>
            Контакт для связи
            <input
              value={form.contact}
              onChange={set("contact")}
              aria-invalid={!!errors.contact}
              aria-describedby={errors.contact ? "err-contact" : undefined}
            />
            {errors.contact && <span id="err-contact" className="err">{errors.contact}</span>}
          </label>
          <Button type="submit">Занять место</Button>
          <p className="status" role="status" aria-live="polite">{status}</p>
        </form>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <p>Перед главной ночью года</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <TopBar />
      <Hero />
      <main>
        <Quote>Ты привыкла всё держать. Здесь можно наконец отпустить.</Quote>
        <Quote tone="accent">Это не про «стать лучше». Это про вернуть себя.</Quote>
        <Quote>Твой ресурс не закончился. Он просто спрятался за чужими ожиданиями.</Quote>
        <WaveDivider from="#f6efe6" to="#ebdfd0" />
        <Program />
        <WaveDivider from="#ebdfd0" to="#2f3b2f" />
        <Quote tone="dark">Место, где тебя не надо спасать. Тебя надо просто вернуть себе.</Quote>
        <Takeaways />
        <Quote tone="accent">8 часов, которые могут изменить сценарий следующего года.</Quote>
        <Booking />
      </main>
      <Footer />
    </>
  );
}
