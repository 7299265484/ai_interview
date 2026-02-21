export const CoachingOptions = [
  {
    name: ' Lecture on Topic',
    icon: '/teacher.webp',
    prompt: 'You are an expert career coach. Provide a detailed lecture on the {user_topic}. Answer only under 120 characters.',
    summaryPrompt: `
Analyze the following conversation in detail. Provide constructive feedback on the user's performance, 
highlight strengths, weaknesses, and specific areas for improvement. 
Offer actionable suggestions for how the user can improve their communication, technical knowledge, 
and overall interview readiness. Use clear, structured points. 
Conversation: {content}
`,
abstract: '/feedback.webp'

  },
  {
    name: ' Mock Interview',
    icon: '/mock_interview.png',
    prompt: 'You are an expert career coach. Provide a mock interview on the {user_topic}. Answer only under 120 characters.',
    summaryPrompt: `
Analyze the following conversation in detail. Provide constructive feedback on the user's performance, 
highlight strengths, weaknesses, and specific areas for improvement. 
Offer actionable suggestions for how the user can improve their communication, technical knowledge, 
and overall interview readiness. Use clear, structured points. 
Conversation: {content}
`,
abstract: '/feedback2.jpg'
  },
  {
    name: ' Ques Ans Prep',
    icon: '/question_answer.png',
    prompt: 'You are an expert career coach. Provide Q&A prep on the {user_topic}. Answer only under 120 characters.',
    summaryPrompt: `
Analyze the following conversation in detail. Provide constructive feedback on the user's performance, 
highlight strengths, weaknesses, and specific areas for improvement. 
Offer actionable suggestions for how the user can improve their communication, technical knowledge, 
and overall interview readiness. Use clear, structured points. 
Conversation: {content}
`,
abstract: '/feedback2.jpg'

  },
  {
  name: ' Meditation',
  icon: '/meditation.png',
  prompt: `
You are a mindfulness and meditation coach. Guide the user through a calming meditation session 
on the topic {user_topic}. Use simple, soothing language and keep each response under 120 characters.
`,
  summaryPrompt: `
Analyze the following meditation session. Provide feedback on the user's focus, relaxation, and engagement. 
Highlight strengths in their practice, areas where they struggled, and suggest actionable improvements 
to deepen mindfulness and consistency. Use clear, structured points. 
Conversation: {content}
`,
abstract: '/feedback3.jpg'
},
{
  name: ' Learn Language',
  icon: '/language.jpg',
  prompt: `
You are a language learning coach. Help the user practice {user_topic} by asking questions, 
correcting mistakes, and giving short explanations. Keep each response under 120 characters.
`,
  summaryPrompt: `
Analyze the following language learning session. Provide detailed feedback on the user's vocabulary, 
grammar, pronunciation, and fluency. Highlight strengths, weaknesses, and specific areas for improvement. 
Offer actionable suggestions for practice techniques, resources, and exercises to accelerate progress. 
Use clear, structured points. 
Conversation: {content}
`,
abstract: '/feedback2.jpg'
}

]

export const CoachingExpert=[
    {
        name: ' Career Coach',
        avatar: '/emilye.png'
    },
    {
        name: ' Career Coach2',
        avatar: '/blunt.webp'
    },
    {
        name: ' Career Coach3',
        avatar: '/clark.webp'
    }
]