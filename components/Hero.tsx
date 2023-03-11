import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Chidike Henry",'An experienced perfomance driven Engineer .tsx', '<And Loves to Code />'],
    })
  return (
    <div>Hero</div>
  )
}