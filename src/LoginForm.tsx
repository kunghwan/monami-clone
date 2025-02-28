import { useState, useRef, FormEvent, useMemo, useCallback } from "react";

interface LoginProps {
  email: string;
  password: string;
}

const ParentComponents = () => {
  const initialState: LoginProps = useMemo(
    () => ({ email: "", password: "" }),
    []
  );

  const [loginProps, seTLoginProps] = useState(initialState);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const emailMessage = useMemo(() => {
    const email = loginProps.email;

    if (email.length === 0) {
      return "이메일 입력";
    }

    if (!email.includes("@")) {
      return "'@'를 포함해주세요.";
    }

    const split1 = email.split("@");

    if (split1[1].length === 0) {
      return "이메일 뒷자리를 입력해주세요.";
    }

    if (!split1[1].includes(".")) {
      return "이메일 뒷자리를 확인해주세요.";
    }

    const split2 = split1[1].split(".");

    if (split2[split2.length - 1]?.length === 0) {
      return "이메일 접미사를 확인해주세요.";
    }
  }, [loginProps.email]);

  const passwordMessage = useMemo(() => {
    const password = loginProps.password;
    const pl = password.length;

    if (pl === 0) {
      return "비밀번호를 입력해주세요.";
    }

    if (pl <= 6) {
      return "비밀번호가 너무 짧습니다";
    }

    if (pl > 18) {
      return "비밀번호가 너무 깁니다";
    }
  }, [loginProps.password]);

  // 여기에서 onSubmit을 useCallback으로 래핑하고, 실제 event 객체를 처리하는 함수로 변경
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const focus = (target: keyof LoginProps) =>
        setTimeout(() => {
          if (target === "email") {
            return emailRef.current?.focus();
          }
          return passwordRef.current?.focus();
        }, 100);

      // email 검사
      if (emailMessage) {
        alert(emailMessage);
        return focus("email");
      }

      // password 검사
      if (passwordMessage) {
        alert(passwordMessage);
        return focus("password");
      }

      alert(`${loginProps.email} 님 반갑습니다!`);
      seTLoginProps(initialState);
    },
    [emailMessage, passwordMessage, loginProps.email, initialState] // 의존성 배열 업데이트
  );

  return (
    <div>
      <form action="" className="maw w-75" onSubmit={onSubmit}>
        <div className=" flex flex-col gap-y-1">
          <label htmlFor="">Email</label>
          <input
            type="email"
            id="email"
            value={loginProps.email}
            onChange={(e) =>
              seTLoginProps((prev) => ({ ...prev, email: e.target.value }))
            }
            ref={emailRef}
            className="bg-gray-50 h-10 px-2.5"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="">Password</label>
          <input
            type="password"
            id="password"
            value={loginProps.password}
            onChange={(e) =>
              seTLoginProps((prev) => ({ ...prev, password: e.target.value }))
            }
            ref={passwordRef}
            className="bg-gray-50 h-10 px-2.5"
          />
        </div>
        <button className="bg-sky-500 p-5 rounded-3xl w-50 mt-1.5 text-amber-200">
          Login
        </button>
      </form>
    </div>
  );
};

export default ParentComponents;
