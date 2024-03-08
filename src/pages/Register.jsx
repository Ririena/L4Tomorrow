import React from "react";
import { supabase } from "../utils/supabase";
import { useState} from 'react'
import RegisterFun from "../components/Auth/RegisterFun";




export default function Register() {
  return (
    <main>
      <section>
        <div>
        <RegisterFun/>
        </div>
      </section>
    </main>
  );
}
