import { getRandomInterviewCover } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = ({interviewId, userId, role, type, techstack, createdAt}: InterviewCardProps) => {

  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format("DD MMM YYYY");

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96" >
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>
          <Image src={getRandomInterviewCover()} alt="Capa" width={90} height={90} className="rounded-full object-fit size-[90px]"/>
          <h3 className="mt-5 capitalize">
            Entrevista para {role} 
          </h3>

          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image src="/calendar.svg" alt="Calendário" width={22} height={22}/>
              <p>{formattedDate}</p>
            </div>
            <div>
              <div className="flex flex-row gap-2 items-center">
                <Image src="/star.svg" alt="Estrela" width={22} height={22}/>
                <p>{feedback?.totalScore || "---"}/100</p>
              </div>
            </div>
          </div>
          <p className="line-clamp-2 mt-5">
              {feedback?.finalAssessment || 
              "Você ainda não fez essa entrevista, faça agora para aprimorar suas habilidades!"}
            </p>
        </div>

        <div className="flex flex-row justify-between">
           <DisplayTechIcons techstack={techstack} />

            <Button className="btn-primary">
              <Link href={feedback ?
                `/interview/${interviewId}/feedback` : 
                `/interview/${interviewId}`
              }>{feedback ? "Ver Feedback" : "Começar Entrevista"}</Link>
            </Button>
        </div>
      </div>
    </div>
  )
}
export default InterviewCard