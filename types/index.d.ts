// type User = {
//   name: string;
//   email: string;
//   image?: string;
//   accountId: string;
// };

// enum Subject {
//   maths = "CodeMaster",
//   language = "DataSensai",
//   science = "DeployGuru",
//   history = "WebCrafter",
//   coding = "SEOSensai",
//   geography = "UXMaster",
//   economics = "AdStrategist",
//   finance = "AnalyticsGuru",
//   business = "BusinessSage",
// }

enum Subject {
  codeMaster = "CodeMaster",
  dataSensai = "DataSensai",
  deployGuru = "DeployGuru",
  webCrafter = "WebCrafter",
  seoSensai = "SEOSensai",
  uxMaster = "UXMaster",
  adStrategist = "AdStrategist",
  analyticsGuru = "AnalyticsGuru",
  businessSage = "BusinessSage",
}



type Companion = Models.DocumentList<Models.Document> & {
  $id: string;
  name: string;
  subject: Subject;
  topic: string;
  duration: number;
  bookmarked: boolean;
};

interface CreateCompanion {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
}

interface GetAllCompanions {
  limit?: number;
  page?: number;
  subject?: string | string[];
  topic?: string | string[];
}

interface BuildClient {
  key?: string;
  sessionToken?: string;
}

interface CreateUser {
  email: string;
  name: string;
  image?: string;
  accountId: string;
}

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface Avatar {
  userName: string;
  width: number;
  height: number;
  className?: string;
}

interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

interface CompanionComponentProps {
  companionId: string;
  subject: string;
  topic: string;
  name: string;
  userName: string;
  userImage: string;
  voice: string;
  style: string;
}
