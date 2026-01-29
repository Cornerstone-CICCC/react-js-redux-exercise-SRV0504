// src/components/User.tsx
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { incrementAge, setFirstname, setLastname } from "../features/user/UserSlice";

export default function User() {
  const dispatch = useDispatch<AppDispatch>();

  const { firstname, lastname, age } = useSelector((state: RootState) => state.user);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
      <h2 style={{ marginBottom: 12 }}>User (Redux Toolkit)</h2>

      <div style={{ display: "grid", gap: 8, marginBottom: 16 }}>
        <div>
          <strong>First name:</strong> {firstname}
        </div>
        <div>
          <strong>Last name:</strong> {lastname}
        </div>
        <div>
          <strong>Age:</strong> {age}
        </div>
      </div>

      <button onClick={() => dispatch(incrementAge())} style={{ padding: "10px 14px" }}>
        Increment Age
      </button>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <label style={{ display: "grid", gap: 6 }}>
          First name
          <input
            value={firstname}
            onChange={(e) => dispatch(setFirstname(e.target.value))}
            placeholder="Type firstname..."
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          Last name
          <input
            value={lastname}
            onChange={(e) => dispatch(setLastname(e.target.value))}
            placeholder="Type lastname..."
          />
        </label>
      </div>
    </div>
  );
}
