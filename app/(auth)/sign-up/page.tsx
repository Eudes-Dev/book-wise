'use client'

import React from 'react'
import { singUpSchema } from "@/lib/validations";
import AuthForm from "@/components/AuthForm";
import {signUp} from "@/lib/actions/auth";

const Page = () => (
    <AuthForm
        type={'SIGN_UP'}
        schema={singUpSchema}
        defaultValues={{
            email: '',
            password: '',
            fullName: '',
            universityId: 0,
            universityCard: ''
        }}
        onSubmit={signUp}
    />
)
export default Page
