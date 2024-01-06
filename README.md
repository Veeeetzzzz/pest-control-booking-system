# Pest Control Booking System
A Pest Control booking system that utilises Azure AD for authentication and allows managers to assign jobs and operatives to see details/act on appointments.

# Features


Assign Roles in Azure AD: Assign roles to users in Azure AD. You can use Azure AD groups or custom attributes to define roles like Manager or Operative.

Managers: Assign jobs, update jobs & delete jobs. 

Operatives: Update jobs

# Prequisites

Node.js and npm (Node Package Manager) installed on the server hosting these files

Azure AD application registration completed with the necessary redirect URIs

Suitable host such as Azure Web Services.

# Installation

Step 1: Clone the GitHub Repository

    git clone https://github.com/Veeeetzzzz/pest-control-booking-system

Step 2: Install Node.js and npm

Ensure Node.js and npm (Node Package Manager) are installed on your machine. If not, download and install them from Node.js official website.

Step 3: Install Project Dependencies

Navigate to your project directory (where your project was cloned) and run:

    npm install

This command will install all the dependencies listed in your package.json file.

Step 4: Update Configuration Files

Open the authConfig.js file in your project.

Replace the placeholders in msalConfig with your actual Azure AD application details:
            
clientId: Your Azure AD application client ID.

authority: Your Azure AD authority URL, usually in the format https://login.microsoftonline.com/<your_tenant_id>.

redirectUri: The URI where Azure AD will redirect to after authentication. It should match what's configured in your Azure AD application.

Step 5: Run the Application

In the project directory, run:

        npm start

This command will start the React application. By default, it should be accessible at http://localhost:3000.

Step 6: Deployment (Optional)

For deployment, you can use various services like Vercel, Netlify, or Azure Static Web Apps.

Each platform has its own set of instructions for deployment. Generally, you'll need to connect your GitHub repository and configure build settings.

Don't forget to update the redirectUri in your Azure AD application and authConfig.js to match your deployed application URL.

# Additional Notes:
Always ensure that your redirectUri in the Azure AD application settings matches the URI in your authConfig.js and the actual URL where your application is running or deployed.

Keep your clientId and other sensitive information secure. Avoid pushing these details to public repositories.

TBC
# License
License Agreement

1. Definitions

    "The Software": All files avalible at this repositry https://github.com/Veeeetzzzz/pest-control-booking-system
   
    "Commercial Use": Use of the Software in a commercial enterprise or for commercial purposes.
   
    "Licensee": The individual or entity that uses the Software.

3. Grant of License

    This Agreement grants the Licensee a non-exclusive, non-transferable, limited license to use the Software according to the terms set forth herein.

4. Use of the Software

    The Software is provided for personal, non-commercial use only.
    Any Commercial Use of the Software is strictly prohibited unless Licensee obtains a separate written agreement with the Licensor.

5. Restrictions

    The Licensee shall not modify, distribute, sublicense, or sell copies of the Software.
    The Licensee shall not reverse-engineer, decompile, or disassemble the Software.

6. Contributions

    Any contributions made to the Software by the Licensee shall be governed under the same terms and conditions of this Agreement.

7. No Warranty

    The Software is provided 'as is', without warranty of any kind, express or implied.

8. Limitation of Liability

    In no event shall the Licensor be liable for any claim, damages, or other liability arising from the use or inability to use the Software.
