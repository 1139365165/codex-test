"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSubmitted(true);
    form.reset();
    timeoutRef.current = setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <form className="booking-form" id="bookingForm" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="petName">毛孩子的名字</label>
        <input id="petName" name="petName" required placeholder="例如：豆包" />
      </div>
      <div className="field">
        <label htmlFor="phone">你的联系方式</label>
        <input id="phone" name="phone" required placeholder="手机号 / 微信号" />
      </div>
      <div className="field">
        <label htmlFor="petType">它是</label>
        <select id="petType" name="petType" defaultValue="狗狗">
          <option>狗狗</option>
          <option>猫咪</option>
          <option>其他小宠</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="serviceType">想预约</label>
        <select id="serviceType" name="serviceType" defaultValue="清爽洗护">
          <option>清爽洗护</option>
          <option>舒缓洗护</option>
          <option>造型修剪</option>
          <option>深层呵护</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="date">期望到店日期</label>
        <input id="date" name="date" type="date" required />
      </div>
      <div className="form-submit">
        <small>提交后约 30 分钟内回复（营业时间）</small>
        <button type="submit">提交预约 <span aria-hidden="true">↗</span></button>
      </div>
      <div className={`form-message${submitted ? " show" : ""}`} id="formMessage" role="status" aria-live="polite">
        收到啦！我们会尽快联系你确认时间。
      </div>
    </form>
  );
}
