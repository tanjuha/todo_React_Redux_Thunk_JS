import React from "react";

export default function RenderField({
  input,
  label,
  type,
  className,
  meta: { touched, error, warning },
}) {
  return (
    <div>
      {type === "textarea" ? (
        <textarea {...input} type={type} className={className}></textarea>
      ) : (
        <>
          <label>{label}</label>
          <input {...input} type={type} className={className} />
        </>
      )}
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-worning">{warning}</span>))}
    </div>
  );
}
