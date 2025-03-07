"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaBriefcase,
  FaBuilding,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaMoneyBillWave,
  FaArrowLeft,
  FaCheckCircle,
  FaUserTie,
  FaTools,
  FaHospital,
  FaStore,
  FaHotel,
  FaCode,
  FaChalkboardTeacher,
  FaTruck,
  FaIndustry,
} from "react-icons/fa";

// Dummy job listings data (same as in the main jobs page)
const jobs = [
  {
    id: 1,
    title: "Resort Manager",
    company: "Jungle Retreat Resorts",
    category: "Hospitality",
    location: "Dandeli",
    salary: "₹35,000 - ₹45,000 per month",
    experience: "3-5 years",
    education: "Hotel Management Degree",
    description: "We are looking for an experienced Resort Manager to oversee all operations of our eco-resort in Dandeli. The ideal candidate will have experience in hospitality management and a passion for eco-tourism.",
    responsibilities: [
      "Manage day-to-day operations of the resort",
      "Supervise staff and ensure excellent customer service",
      "Handle guest inquiries and resolve issues",
      "Oversee maintenance of resort facilities",
    ],
    requirements: [
      "3-5 years of experience in resort management",
      "Excellent communication and leadership skills",
      "Knowledge of local tourism attractions",
      "Ability to work in a remote location",
    ],
    contactPerson: "Mr. Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "careers@jungleretreat.com",
    postedDate: "2023-05-15",
    icon: <FaHotel />,
  },
  {
    id: 2,
    title: "Tour Guide",
    company: "Dandeli Adventures",
    category: "Tourism",
    location: "Dandeli",
    salary: "₹20,000 - ₹25,000 per month",
    experience: "1-3 years",
    education: "High School Diploma",
    description: "Join our team as a Tour Guide to lead adventure tours in and around Dandeli. Knowledge of local wildlife, river rafting, and trekking routes is essential.",
    responsibilities: [
      "Lead groups on adventure tours and treks",
      "Provide information about local wildlife and ecology",
      "Ensure safety of tourists during activities",
      "Coordinate with resort staff for logistics",
    ],
    requirements: [
      "Experience in outdoor activities and adventure sports",
      "Knowledge of local flora, fauna, and geography",
      "Good communication skills in English and Kannada",
      "First aid certification preferred",
    ],
    contactPerson: "Ms. Priya Sharma",
    phone: "+91 87654 32109",
    email: "jobs@dandeliadventures.com",
    postedDate: "2023-05-20",
    icon: <FaUserTie />,
  },
  {
    id: 3,
    title: "Chef",
    company: "Riverside Restaurant",
    category: "Food & Beverage",
    location: "Dandeli",
    salary: "₹25,000 - ₹35,000 per month",
    experience: "2-4 years",
    education: "Culinary Arts Diploma",
    description: "We are hiring an experienced Chef specializing in local Karnataka cuisine and continental dishes for our popular riverside restaurant in Dandeli.",
    responsibilities: [
      "Prepare and cook high-quality dishes",
      "Develop new menu items featuring local ingredients",
      "Manage kitchen staff and inventory",
      "Ensure food safety and hygiene standards",
    ],
    requirements: [
      "2-4 years of experience in restaurant cooking",
      "Knowledge of local Karnataka cuisine",
      "Ability to work in a fast-paced environment",
      "Team management skills",
    ],
    contactPerson: "Mr. Venkat Rao",
    phone: "+91 76543 21098",
    email: "careers@riversiderestaurant.com",
    postedDate: "2023-05-25",
    icon: <FaStore />,
  },
  {
    id: 4,
    title: "Software Developer",
    company: "TechSolutions India",
    category: "IT & Software",
    location: "Dandeli",
    salary: "₹40,000 - ₹60,000 per month",
    experience: "2-5 years",
    education: "B.Tech/B.E in Computer Science",
    description: "TechSolutions is looking for a skilled Software Developer to join our remote-friendly team. The position is based in Dandeli with flexible work arrangements.",
    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with team members on project requirements",
      "Write clean, maintainable code",
      "Troubleshoot and debug applications",
    ],
    requirements: [
      "Experience with JavaScript, React, and Node.js",
      "Knowledge of database systems",
      "Problem-solving skills",
      "Ability to work independently and in a team",
    ],
    contactPerson: "Ms. Anita Desai",
    phone: "+91 65432 10987",
    email: "hr@techsolutions.in",
    postedDate: "2023-06-01",
    icon: <FaCode />,
  },
  {
    id: 5,
    title: "School Teacher",
    company: "Dandeli Public School",
    category: "Education",
    location: "Dandeli",
    salary: "₹20,000 - ₹30,000 per month",
    experience: "1-3 years",
    education: "B.Ed with relevant subject specialization",
    description: "Dandeli Public School is hiring teachers for Mathematics, Science, and English subjects for classes 6-10.",
    responsibilities: [
      "Teach assigned subjects to students",
      "Prepare lesson plans and teaching materials",
      "Evaluate student performance and provide feedback",
      "Participate in school activities and meetings",
    ],
    requirements: [
      "B.Ed degree with subject specialization",
      "Experience in teaching middle or high school students",
      "Good communication skills",
      "Passion for education and student development",
    ],
    contactPerson: "Mr. Suresh Patil",
    phone: "+91 54321 09876",
    email: "principal@dandelipublicschool.edu",
    postedDate: "2023-06-05",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 6,
    title: "Nurse",
    company: "Dandeli Community Hospital",
    category: "Healthcare",
    location: "Dandeli",
    salary: "₹25,000 - ₹35,000 per month",
    experience: "1-3 years",
    education: "B.Sc Nursing",
    description: "Dandeli Community Hospital is seeking qualified nurses to join our healthcare team. Both day and night shifts available.",
    responsibilities: [
      "Provide patient care and administer medications",
      "Assist doctors during procedures",
      "Maintain patient records",
      "Monitor patient vital signs and conditions",
    ],
    requirements: [
      "B.Sc Nursing degree",
      "Valid nursing license",
      "Experience in hospital setting",
      "Good communication and interpersonal skills",
    ],
    contactPerson: "Dr. Meena Kulkarni",
    phone: "+91 43210 98765",
    email: "recruitment@dandelihospital.org",
    postedDate: "2023-06-10",
    icon: <FaHospital />,
  },
  {
    id: 7,
    title: "Driver",
    company: "Dandeli Transport Services",
    category: "Transportation",
    location: "Dandeli",
    salary: "₹15,000 - ₹20,000 per month",
    experience: "2+ years",
    education: "10th Pass with valid driving license",
    description: "We are hiring experienced drivers for our tourist transport service. Knowledge of local routes and tourist spots is required.",
    responsibilities: [
      "Drive tourists to various destinations safely",
      "Maintain vehicle cleanliness and condition",
      "Assist with loading and unloading luggage",
      "Provide basic information about local attractions",
    ],
    requirements: [
      "Valid commercial driving license",
      "Experience driving in hilly terrain",
      "Knowledge of local routes and attractions",
      "Good communication skills",
    ],
    contactPerson: "Mr. Ganesh Naik",
    phone: "+91 32109 87654",
    email: "jobs@dandelitransport.com",
    postedDate: "2023-06-15",
    icon: <FaTruck />,
  },
  {
    id: 8,
    title: "Maintenance Technician",
    company: "Dandeli Paper Mills",
    category: "Manufacturing",
    location: "Dandeli",
    salary: "₹18,000 - ₹25,000 per month",
    experience: "2-5 years",
    education: "ITI in relevant trade",
    description: "Dandeli Paper Mills is looking for experienced Maintenance Technicians to join our maintenance team for machinery upkeep and repairs.",
    responsibilities: [
      "Perform preventive maintenance on machinery",
      "Troubleshoot and repair equipment issues",
      "Maintain maintenance records",
      "Ensure safety protocols are followed",
    ],
    requirements: [
      "ITI in Mechanical/Electrical trade",
      "Experience in industrial maintenance",
      "Knowledge of safety procedures",
      "Ability to work in shifts",
    ],
    contactPerson: "Mr. Ramesh Hegde",
    phone: "+91 21098 76543",
    email: "careers@dandelipapermills.com",
    postedDate: "2023-06-20",
    icon: <FaTools />,
  },
];

export default function JobDetailPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const router = useRouter();
  const [job, setJob] = useState(null);

  // Ensure we only show the theme when mounted on the client
  useEffect(() => setMounted(true), []);

  // Find the job based on the ID parameter
  useEffect(() => {
    if (params.id) {
      const jobId = parseInt(params.id);
      const foundJob = jobs.find(j => j.id === jobId);
      
      if (foundJob) {
        setJob(foundJob);
      } else {
        // Redirect to jobs page if job not found
        router.push('/jobs');
      }
    }
  }, [params.id, router]);

  // Prevent hydration mismatch by not rendering anything until mounted
  if (!mounted || !job) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto p-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  const currentTheme = resolvedTheme || theme;

  // Function to get the appropriate icon for the job category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "IT & Software":
        return <FaCode />;
      case "Healthcare":
        return <FaHospital />;
      case "Education":
        return <FaChalkboardTeacher />;
      case "Hospitality":
        return <FaHotel />;
      case "Food & Beverage":
        return <FaStore />;
      case "Manufacturing":
        return <FaIndustry />;
      case "Tourism":
        return <FaUserTie />;
      case "Transportation":
        return <FaTruck />;
      default:
        return <FaBriefcase />;
    }
  };

  return (
    <div className={`min-h-screen ${currentTheme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/jobs">
          <button className={`flex items-center text-sm font-medium ${
            currentTheme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
          }`}>
            <FaArrowLeft className="mr-2" />
            Back to Jobs
          </button>
        </Link>
      </div>

      {/* Job Header */}
      <div className={`relative overflow-hidden ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} py-12 mb-8`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className={`flex items-center justify-center w-16 h-16 rounded-full ${
              currentTheme === "dark" ? "bg-blue-900" : "bg-blue-100"
            } mr-6 mb-4 md:mb-0`}>
              <span className={`text-2xl ${currentTheme === "dark" ? "text-blue-300" : "text-blue-600"}`}>
                {job.icon || getCategoryIcon(job.category)}
              </span>
            </div>
            <div>
              <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                {job.title}
              </h1>
              <div className="flex flex-col md:flex-row md:items-center text-sm mb-2">
                <div className={`flex items-center ${currentTheme === "dark" ? "text-gray-400" : "text-gray-600"} mr-4`}>
                  <FaBuilding className="mr-1" />
                  {job.company}
                </div>
                <div className={`flex items-center ${currentTheme === "dark" ? "text-gray-400" : "text-gray-600"} mr-4`}>
                  <FaMapMarkerAlt className="mr-1" />
                  {job.location}
                </div>
                <div className={`flex items-center ${currentTheme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  <FaCalendarAlt className="mr-1" />
                  Posted: {job.postedDate}
                </div>
              </div>
              <span className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${
                currentTheme === "dark" ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-800"
              }`}>
                {job.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Description */}
            <div className={`p-6 rounded-lg shadow-md mb-8 ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
              <h2 className={`text-xl font-bold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                Job Description
              </h2>
              <p className={`mb-6 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                {job.description}
              </p>

              {/* Responsibilities */}
              <h3 className={`text-lg font-semibold mb-3 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                Key Responsibilities
              </h3>
              <ul className={`list-disc pl-5 mb-6 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="mb-2">{responsibility}</li>
                ))}
              </ul>

              {/* Requirements */}
              <h3 className={`text-lg font-semibold mb-3 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                Requirements
              </h3>
              <ul className={`list-disc pl-5 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="mb-2">{requirement}</li>
                ))}
              </ul>
            </div>

            {/* Application Process */}
            <div className={`p-6 rounded-lg shadow-md ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
              <h2 className={`text-xl font-bold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                How to Apply
              </h2>
              <p className={`mb-6 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                Interested candidates can apply by sending their resume and cover letter to the contact details provided. Please mention the job title in the subject line.
              </p>
              
              <h3 className={`text-lg font-semibold mb-3 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                Application Process
              </h3>
              <ol className={`list-decimal pl-5 mb-6 ${currentTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                <li className="mb-2">Send your resume and cover letter to the provided email address</li>
                <li className="mb-2">Shortlisted candidates will be contacted for an interview</li>
                <li className="mb-2">Final selection will be based on interview performance and reference checks</li>
                <li className="mb-2">Selected candidates will receive an offer letter</li>
              </ol>
              
              <button 
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  currentTheme === "dark" 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Job Overview */}
            <div className={`p-6 rounded-lg shadow-md mb-8 ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
              <h2 className={`text-xl font-bold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                Job Overview
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentTheme === "dark" ? "bg-gray-700" : "bg-gray-100"
                  } mr-3`}>
                    <FaMoneyBillWave className={`${currentTheme === "dark" ? "text-green-400" : "text-green-600"}`} />
                  </div>
                  <div>
                    <h3 className={`text-sm font-medium ${currentTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      Salary
                    </h3>
                    <p className={`${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>{job.salary}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentTheme === "dark" ? "bg-gray-700" : "bg-gray-100"
                  } mr-3`}>
                    <FaBriefcase className={`${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                  </div>
                  <div>
                    <h3 className={`text-sm font-medium ${currentTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      Experience
                    </h3>
                    <p className={`${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>{job.experience}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentTheme === "dark" ? "bg-gray-700" : "bg-gray-100"
                  } mr-3`}>
                    <FaGraduationCap className={`${currentTheme === "dark" ? "text-purple-400" : "text-purple-600"}`} />
                  </div>
                  <div>
                    <h3 className={`text-sm font-medium ${currentTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      Education
                    </h3>
                    <p className={`${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>{job.education}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentTheme === "dark" ? "bg-gray-700" : "bg-gray-100"
                  } mr-3`}>
                    <FaMapMarkerAlt className={`${currentTheme === "dark" ? "text-red-400" : "text-red-600"}`} />
                  </div>
                  <div>
                    <h3 className={`text-sm font-medium ${currentTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      Location
                    </h3>
                    <p className={`${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>{job.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`p-6 rounded-lg shadow-md ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
              <h2 className={`text-xl font-bold mb-4 ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className={`${currentTheme === "dark" ? "text-white" : "text-gray-900"} font-medium`}>
                  {job.contactPerson}
                </div>
                
                <div className="flex items-center">
                  <FaPhone className={`mr-3 ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                  <a 
                    href={`tel:${job.phone}`} 
                    className={`${currentTheme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"}`}
                  >
                    {job.phone}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-3 ${currentTheme === "dark" ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href={`mailto:${job.email}`} 
                    className={`${currentTheme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"}`}
                  >
                    {job.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 