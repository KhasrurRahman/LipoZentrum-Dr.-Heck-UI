# Project Overview:

Testing Module: [Link](https://lipo-zentrum-qceeyufwx-khasrurrahmans-projects.vercel.app)

The "NewLife" app is intended to be an innovative, GDPR-compliant solution developed specifically for patients suffering from lipedema. The app accompanies patients from the initial consultation through the "New Life" healing year and offers comprehensive support throughout the entire treatment process. By integrating gamification elements, the app encourages active patient participation, increases their motivation, facilitates communication, and helps patients master their surgical marathon in a playful and successful way.
1. **Database Design:** [Database Design](https://www.drawdb.app/editor?shareId=68af70006c4d698674e4b9af4c977eb5)
2. **Data Flow Diagram:** [Data Flow Diagram](https://www.figma.com/board/Ldg8HplG06q2RazmNeVWOr/LipoZentrum---New-Life--Data-Flow-Diagram-?node-id=0-1&t=qlVfbslMNCPITXMy-1)
3. **Development Documentation:** [New Life -Web Application Development(v1)](https://hackmd.io/@BvlUBmNwRw-Tl3x9miqzRw/Bk7XQKObxe)
# Setup Instructions
First, run the development server:

```bash

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
**External Library Useses:**
1. eact calender: [React Calendar](https://www.npmjs.com/package/react-calendar)
2. Recharts: [React - chart](https://recharts.org/en-US)
3. React Big Calender: [React big calendar](https://www.npmjs.com/package/react-big-calendar)
4. React Hook Form: [React Hook Form](https://react-hook-form.com)
5. Zod(React Form validation): [Zod](https://zod.dev)
6. Hook Form resolvers for form validation: [hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
7. Database management tools: [prisma](https://www.prisma.io)
8. Role Based Auth: [Clerk](https://clerk.com/)

Github Repo for design part: https://github.com/KhasrurRahman/LipoZentrum-Dr.-Heck-UI

---
### 1. <span style="color:rgb(0, 176, 80)"><u>(16.06.2025) - project Status and updates: </u></span>
- Role management structure
- Appointment page design and fatch with demo data
- make new Contact page and fetch with demo data
- Patient details Page design
- single card for patient details#c53434
- progress card overview
- shortcut for direct action with the patient
- Appointment Calender
- Suregery Appointment details side bar
- make full page device responsive
- Deplaoy The complted version to testing version for feedback that it is align with the requirements or not (https://lipo-zentrum.vercel.app/admin)
- Find Frontend Developer Profile
  
### 2. <span style="color:rgb(0, 176, 80)"><u>(23.06.2025) - project Status and updates:</u></span>
- Payment History Table added to the patient details page
- Email History Table added to the patient details page
- Create Dynamic Form Modal Component with different icons
	- Create
	- Delete
	- Update
- Dynamic Form for all modules

> [!note] 
> No need to build separate forms for different modules; forms for create, delete, and update will change dynamically 

- Use these dynamic input forms with form validation to create the Patient Create Form

> [!note] 
>  The patient data will be inserted or updated manually from the backend

- Make the input form device responsive
- Create dynamic input fields to be used in every different form using one component (dynamically)

> [!note] 
>  Whenever any field is needed in any form, just call the input component and the input field will be built in the form. No need to create different input fields for different forms.

- Update patient data at patient details page
- Form validation (using Hook Form resolvers, React Hook Form, Zod)

> [!note] 
>  Form validation will also work dynamically; by just passing the error message, errors will display for each field automatically, including for selected fields.

- For data management
- Install Docker **<span style="color:rgb(255, 0, 0)">Mysql image</span>** for use the database locally
- Install **<span style="color:rgb(255, 0, 0)">Prisma</span>** to manage the database schema and operation directly
- Create database schema for **<span style="color:rgb(255, 0, 0)">patient</span> and <span style="color:rgb(255, 0, 0)">admin</span>** table on **Prisma** file.
- Install Prisma migration for migrate different table from prisma
- setup **<span style="color:rgb(255, 0, 0)">Prisma Studio</span>** to get the GUI of our databse to get a vizualization to work with the database more easily

### 3. <span style="color:rgb(0, 176, 80)"><u>(30.06.2025) - project Status and updates:</u></span>

---
## <span style="color:rgb(199, 112, 112)">Feedback and Approval</span>

**Backend Design and arrangement:**
1. Admin Dashboard:
   - Total spend time in application - done
   - Categorise patients (parameter: time spend in application, booking status, level gamification feature, connecting to other users)
2. All patients list: - done
   - Filter options: doctors, 1st, 2nd, 3rd, 4th surgery, pre-consultation, post-consultation,age, zip-code - **done**
3. Single Patient Details (example): - done with one question
   - Height, weight
   - Please delete blood type
   - Pre-existing conditions
   - Birthday (automated birthday wishes)
   - Surgery Appointment
   - Who’s the doctor?
   - Insurance status
   - How can we send documents in secure way? Encrypted
   - Need overview which documents where send
   - What was talked on the phone with patient?
3. Appointments:
   - Consultation or Re-presentation after the healing year can automatically be
   booked
   - Surgery appointments can only be requested (need to be checked with team)
4. New Contacts
   - From where do they come? Just created a user account? Or also from social
   media?
   - Does application replaces our social media account?
   - Can we link social media and create a blogpost page in application?


**Form Field:**

- Create Patient Field:
- Username
- First Name
- Last Name
- Password
- Phone
- Email
- Photo
- address
- Gender
- documents[]
- birthday
- surgery stage
- gamification_level
- next_consultation_date
- Patient_joined
- zip_code
- assign_doctor
- consultation_type