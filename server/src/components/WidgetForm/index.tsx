import { useDebugValue, useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";


export const FeedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        } 
    },  
    IDEA: { 
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de um Lâmpada'
        } 
    },  
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        } 
    },  
}

export type FeedbackType = keyof typeof FeedbackTypes;

export function WidgetForm() {
    const [FeedbackType, setFeedbackType] = useState<FeedbackType | null>(null) 
    const [FeedbackSent, setFeedbackSent] = useState(false);


        function handleRestartFeedback(){
            setFeedbackSent(false);
            setFeedbackType (null);
        }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { FeedbackSent ? (
                <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                {!FeedbackType ? (
                     <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                      ) : (
                     <FeedbackContentStep 
                     FeedbackType={FeedbackType} 
                     onFeedbackRestarRequested={handleRestartFeedback}
                     onFeedbackSent={()=> setFeedbackSent(true)}
                 />
                )}
               </>
            )}
            
            
            <footer className="text-xs text-neutral-400">
            Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}