const data = {
    Questions: {
        nameApplicant: "1. [FWO, BELSPO] Name applicant.",
        projectNumber: "2. [FWO, ERC, H2020, BELSPO, HorizonEurope] Project number.",
        projectTitle: "3. [FWO, H2020, BELSPO, HorizonEurope] Project title.",
        projectAcronym: "4. [ERC, H2020, BELSPO, HorizonEurope] Project acronym.",
        affiliation: "5. [FWO, BELSPO] Affiliation.",
        
        versionNumber: "1. [H2020, HorizonEurope] Version number.",
        versionChanges: "2. [H2020] Changes in this version.",
        dateFirstVersion: "3. [H2020] Completion date of first version.",
        lastUpdate: "4. [H2020, HorizonEurope] Date of the last update.",
        
        newExistingData: "1. [FWO, ERC, H2020, BELSPO, HorizonEurope] Will you generate/collect new data and/or make use of existing data? State the reasons and specify how you will use existing data.",
        datasetsList: "2. [ERC] Name and list here all datasets that will be used and/or generated in this project. Add a reference for existing datasets.",
        datasetsPurpose: "3. [H2020, HorizonEurope] Per dataset, state its purpose, explain the relation to the objectives of the project, specify to whom it will be useful.",
        datasetsOrigin: "4. [FWO, ERC, H2020, BELSPO, HorizonEurope] Per dataset, state its origin/source.",
        datasetsTypeFormat: "5. [FWO, ERC, H2020, BELSPO, HorizonEurope] Per dataset, state digital format(s) of raw and processed data files, distinguishing proprietary from open format(s).",
        formatSoftware: "6. [ERC, H2020, HorizonEurope] What methods or software tools are needed to access data files in proprietary format? Is documentation about the software needed to open the data file provided in the metadata? Is it possible to provide the relevant software (e.g. in open source code)?",
        datasetsVolume: "7. [FWO, ERC, H2020, BELSPO, HorizonEurope] Per dataset, state its expected volume at the end of the project.",
        
        datasetsSharing: "1. [FWO, ERC, H2020, BELSPO, HorizonEurope] Which datasets will be shared and made available (for the society) after the end of the project? Distinguish open access datasets from restricted or closed access datasets.",
        sharingRational: "2. [FWO, ERC, H2020, BELSPO, HorizonEurope] Are there any factors restricting or preventing the sharing of (some of) the data? Per dataset with restricted or closed access, provide a rationale for doing so.",
        sharingRepos: "3. [FWO, ERC, H2020, BELSPO, HorizonEurope] Per dataset, list the repositories in which data, metadata, code, software and related documentation will be shared. If research materials and protocols will be shared in centralised repositories, specify it below.",
        accessProcedure: "4. [FWO, ERC, H2020, BELSPO, HorizonEurope] Per dataset with restricted access, explain how access will be provided (under what conditions or procedure).",
        datasetsEmbargo: "5. [FWO, ERC, H2020, BELSPO, HorizonEurope] Per dataset, state when it will be made available. Is embargo foreseen?",
        datasetsLicense: "6. [ERC, H2020, BELSPO, HorizonEurope] Per dataset, state how it will be licensed to permit the widest re-use possible. If the re-use of some data is restricted, explain why and specify the length of time for which the data will remain re-usable.",
        resolvedIdentifier: "7. [HorizonEurope] Per repository, specify if it provides a digital identifier to datasets and/or if it will resolve the identifier.",
        metadataLicence: "8. [HorizonEurope] Will metadata be made openly available and licenced under a public licence? Check your funder requirements and specify the licence.",
        metadataSharing: "9. [HorizonEurope] Per dataset, specify for how long the data will remain available and findable and if metadata will be guaranteed to remain available after data is no longer available.",

        
        datasetsMetadata: "1. [FWO, ERC, H2020, BELSPO, HorizonEurope] Will a metadata scheme be used? Per dataset, list the standard metadata schemes that will be used and/or what type of metadata will be created and how.",
        maDatasetsMetadata: "2.[HorizonEurope] Will dataset metadata be provided in a machine-readable format to be found by search engines, registries or databases in an automated way (tags, keywords)?",
        provenance: "3. [HorizonEurope] How will you document data provenance? Specify if appropriate standards (such as W3C Prov Model Primer) will be used.",
        datasetsIdentifier: "4. [ERC, H2020, HorizonEurope] Do you make use of persistent identifiers or unique identifiers such as Digital Object Identifiers (DOI)?",
        datasetsOntology: "5. [ERC, H2020, HorizonEurope] Will you use standard vocabularies/ontologies to describe your data (at the level of each recorded value)? Per dataset, list the standard vocabularies/ontologies you will use or if/how you will map your customised terms to standard ontologies. Specify if you will publish your customised terms in appropriate platforms and where/how.",
        maDatasetsOntology: "6. [HorizonEurope] Per dataset, specify how the description of the list of terms or the URI/URL of the used vocabularies/ontologies will be provided (in machine-actionable formats, in human-readable formats, both, etc). If your dataset is related to other existing datasets, specify how the reference and the type of relation between datasets will be documented (qualified reference).",
        datasetsDocs: "7. [FWO, H2020, BELSPO, HorizonEurope] What documentation will be provided to enable understanding and reuse of data collected/generated in this project?",
        
        costsFair: "1. [H2020, HorizonEurope] What are the estimated costs for making data more FAIR (Findable, Accessible, Interoperable, Reusable)?",
        costsFairCover: "2. [H2020, HorizonEurope] How will these costs (for making data FAIR) be covered?",
        costSharing: "3. [FWO, ERC, H2020, BELSPO, HorizonEurope] What are the expected costs for data sharing and reuse?",
        costSharingCover: "4. [FWO, ERC, H2020, BELSPO, HorizonEurope] How will these costs (for data sharing and reuse) be covered?",
        
        storageDuringWhere: "1. [FWO, ERC, H2020, BELSPO, HorizonEurope] Where will the data be stored during the project?",
        storageDuringFrequency: "2. [FWO, ERC, H2020, BELSPO, HorizonEurope] What is the backup strategy?",
        storageDuringAvailability: "3. [FWO, BELSPO] Is there currently sufficient storage & backup capacity during the project? If yes, specify concisely. If no or insufficient storage or backup capacities are available, then explain how this will be taken care of.",
        costDuring: "4. [FWO, ERC, H2020, BELSPO, HorizonEurope] What are the expected costs for data storage and backup during the project?",
        costDuringCover: "5. [FWO, ERC, H2020, BELSPO, HorizonEurope] How will these costs (for data storage and backup during the project) be covered?",
        securityDuring: "6. [FWO, ERC, H2020, BELSPO, HorizonEurope] Data security: how will you ensure that the data are securely stored (not accessed or modified by unauthorised persons), especially for sensitive data.",
        
        datasetsListArchiving: "1. [FWO, ERC, H2020, BELSPO, HorizonEurope] List which datasets will be preserved or not, for at least 5-10 years after the end of the project and explain why (legal, contractual restrictions etc..).",
        ArchivingWhere: "2. [FWO, ERC, H2020, BELSPO, HorizonEurope] Where will datasets be stored for long term (archived) after the end of the project?",
        CostsArchiving: "3. [FWO, ERC, H2020, BELSPO, HorizonEurope] Estimate the costs for long term preservation (or archiving).",
        CostsArchivingCover: "4. [FWO, ERC, H2020, BELSPO, HorizonEurope] How will these costs (for long term preservation) be covered?",
        SecurityArchiving: "5. [ERC, H2020, HorizonEurope] Data security: are the datasets safely stored in repositories for long term preservation and curation?",
        
        RespDataQuality: "1. [ERC, H2020, HorizonEurope] Describe data quality assurance processes and who will be responsible for it.",
        RespDataDoc: "2. [FWO, H2020, BELSPO, HorizonEurope] Who will be responsible for the data documentation and metadata?",
        RespDataStorage: "3. [FWO, H2020, BELSPO, HorizonEurope] Who will be responsible for data storage and backup during the project?",
        RespDataArchiving: "4. [FWO, H2020, BELSPO, HorizonEurope] Who will be responsible for ensuring data preservation and sharing?",
        RespDMP: "5. [FWO, H2020, BELSPO, HorizonEurope] Who bears the end responsibility for updating and implementing this DMP?",
        
        PersonalData: "1. [FWO, H2020, BELSPO, HorizonEurope] Will you use personal/sensitive data? If so, shortly describe the kind of personal data you will use AND add the reference to your file in your host institution's privacy register.",
        Consent: "2. [HorizonEurope] Will informed consent for data sharing and long term preservation be included in questionnaires dealing with personal data?",
        EthicalIssue: "3. [FWO, H2020, BELSPO, HorizonEurope] Are there any ethical issues concerning the creation and/or use of the data (e.g. experiments on humans or animals, dual use)? If so, add the reference to the formal approval by the relevant ethical review committee(s).",
        IntellectualProperty: "4. [FWO, BELSPO] Will Intellectual property restrictions be claimed for your data? If so, for what data and which restrictions will be asserted?",
        LegalIssue: "5. [FWO, BELSPO, HorizonEurope] Do existing 3rd party agreements restrict dissemination or exploitation of the data you (re)use? If so, to what data do they relate and what restrictions are in place?",
        
        Other: "1. [H2020, HorizonEurope] Indicate whether other national/funder/sectorial/departmental procedures for data management are used.",
        OtherOutputs: "2. [HorizonEurope] If some of the questions in this DMP can be applied to other research outputs, such as physical materials, step-by-step protocols and software, specify here how these other outputs will be managed, shared and made available for reuse during and after the project."
        
    },
    fwo: {
        sections: {
            "1. General information": {
                nameApplicant: "Name applicant",
                projectNumber: ["FWO Project Number & title"],
                projectTitle: ["FWO Project Number & title"],
                affiliation: "Affiliation",
            },
            "2. Data description": {
                newExistingData: "Will you generate/collect new data and/or make use of existing data?",
                datasetsOrigin: ["Describe the origin, type and format of the data (per dataset) and its (estimated) volume.", "Datasets origin:"],
                datasetsTypeFormat: ["Describe the origin, type and format of the data (per dataset) and its (estimated) volume.", "Datasets type and format(s):"],
                datasetsVolume: ["Describe the origin, type and format of the data (per dataset) and its (estimated) volume.", "Datasets volume:"],
            },
            "3. Ethical and legal issues": {
                PersonalData: "Will you use personal/sensitive data? If so, shortly describe the kind of personal data you will use AND add the reference to your file in your host institution's privacy register.",
                EthicalIssue: "Are there any ethical issues concerning the creation and/or use of the data (e.g. experiments on humans or animals, dual use)? If so, add the reference to the formal approval by the relevant ethical review committee(s).",
                IntellectualProperty: "Does your work possibly result in research data with potential for tech transfer and valorization? Will IP restrictions be claimed for the data you created? If so, for what data and which restrictions will be asserted?",
                LegalIssue: "Do existing 3rd party agreements restrict dissemination or exploitation of the data you (re)use? If so, to what data do tåhey relate and what restrictions are in place?"
            },
            "4. Documentation and metadata": {
                datasetsMetadata: "Will a metadata standard be used? Describe in detail which standard will be used.  If not, state in detail which metadata will be created to make the data easy/easier to find and reuse.",
                datasetsDocs: "What documentation will be provided to enable understanding and reuse of data collected/generated in this project?",
            },
            "5. Data storage & backup during the FWO project": {
                storageDuringWhere: "Where will the data be stored?",
                storageDuringFrequency: "How will the data be backed up?",
                storageDuringAvailability: "Is there currently sufficient storage & backup capacity during the project? If yes, specify concisely. If no or insufficient storage or backup capacities are available, then explain how this will be taken care of.",
                costDuring: ["What are the expected costs for data storage and backup during the project? How will these costs be covered?","Costs for storage and backup:"],
                costDuringCover: ["What are the expected costs for data storage and backup during the project? How will these costs be covered?","Funding for storage and backup:"],
                securityDuring: "Data security: how will you ensure that the data are securely stored (not accessed or modified by unauthorized persons), especially for sensitive data.",
            },
            "6. Data preservation after the end of the FWO project": {
                datasetsListArchiving: "Which data will be retained for the expected 5 year period after the end of the project? In case only a selection of the data can/will be preserved, clearly state the reasons for this (legal or contractual restrictions, physical preservation issues, …)",
                ArchivingWhere: "Where will these data be archived (=stored for the long term)?",
                CostsArchiving: ["What are the expected costs for data preservation during these 5 years? How will the costs be covered?","Costs for archiving:"],
                CostsArchivingCover: ["What are the expected costs for data preservation during these 5 years? How will the costs be covered?","Funding for archiving:"],
            },
            "7. Data sharing and reuse": {
                datasetsSharing: "Which data will be made available after the end of the project?",
                sharingRational: "Are there any factors restricting or preventing the sharing of (some of) the data (e.g. as defined in an agreement with a 3rd party, legal restrictions)?",
                sharingRepos: "Where/how will the data be made available for reuse? ",
                accessProcedure: "Who will be able to access the data and under what conditions?",
                datasetsEmbargo: "When will the data be made available?",
                costSharing: ["What are the expected costs for data sharing? How will these costs be covered?", "Costs for data sharing:"],
                costSharingCover: ["What are the expected costs for data sharing? How will these costs be covered?", "Funding for data sharing costs:"]
            },
            "8. Responsibilities": {
                RespDataDoc: "Who will be responsible for the data documentation and metadata?",
                RespDataStorage: "Who will be responsible for data storage and backup during the project?",
                RespDataArchiving: "Who will be responsible for ensuring data preservation and sharing?",
                RespDMP: "Who bears the end responsibility for updating and implementing this DMP?"
            },
        }
    },
    belspo: {
        sections: {
            "1. General information": {
                nameApplicant: "Name applicant",
                projectNumber: ["BELSPO Project Code, Title and Acronym"],
                projectTitle: ["BELSPO Project Code, Title and Acronym"],
                projectAcronym: ["BELSPO Project Code, Title and Acronym"],
                affiliation: "Affiliation",
            },
            "2. Data description": {
                newExistingData: "Will you generate/collect new data and/or make use of existing data?",
                datasetsOrigin: ["Describe the origin, type and format of the data (per dataset) and its (estimated) volume.", "Datasets origin:"],
                datasetsTypeFormat: ["Describe the origin, type and format of the data (per dataset) and its (estimated) volume.", "Datasets type and format(s):"],
                datasetsVolume: ["Describe the origin, type and format of the data (per dataset) and its (estimated) volume.", "Datasets volume:"],
            },
            "3. Ethical and legal issues": {
                PersonalData: "Will you use personal/sensitive data? If so, shortly describe the kind of personal data you will use AND add the reference to your file in your host institution's privacy register.",
                EthicalIssue: "Are there any ethical issues concerning the creation and/or use of the data (e.g. experiments on humans or animals, dual use)? If so, add the reference to the formal approval by the relevant ethical review committee(s).",
                IntellectualProperty: "Does your work possibly result in research data with potential for tech transfer and valorization? Will IP restrictions be claimed for the data you created? If so, for what data and which restrictions will be asserted?",
                LegalIssue: "Do existing 3rd party agreements restrict dissemination or exploitation of the data you (re)use? If so, to what data do tåhey relate and what restrictions are in place?"
            },
            "4. Documentation and metadata": {
                datasetsMetadata: "Will a metadata standard be used? Describe in detail which standard will be used.  If not, state in detail which metadata will be created to make the data easy/easier to find and reuse.",
                datasetsDocs: "What documentation will be provided to enable understanding and reuse of data collected/generated in this project?",
            },
            "5. Data storage & backup during the BELSPO project": {
                storageDuringWhere: "Where will the data be stored?",
                storageDuringFrequency: "How will the data be backed up?",
                storageDuringAvailability: "Is there currently sufficient storage & backup capacity during the project? If yes, specify concisely. If no or insufficient storage or backup capacities are available, then explain how this will be taken care of.",
                costDuring: ["What are the expected costs for data storage and backup during the project? How will these costs be covered?","Costs for storage and backup:"],
                costDuringCover: ["What are the expected costs for data storage and backup during the project? How will these costs be covered?","Funding for storage and backup:"],
                securityDuring: "Data security: how will you ensure that the data are securely stored and not accessed or modified by unauthorized persons?",
            },
            "6. Data preservation after the end of the BELSPO project": {
                datasetsListArchiving: "In case only a selection of the data can/will be preserved, clearly state the reasons for this (legal or contractual restrictions, physical preservation issues, …)",
                ArchivingWhere: "Where will these data be archived (=stored for the long term)?",
                CostsArchiving: ["What are the expected costs for data preservation? How will the costs be covered?","Costs for archiving:"],
                CostsArchivingCover: ["What are the expected costs for data preservation? How will the costs be covered?","Funding for archiving:"],
            },
            "7. Data sharing and reuse": {
                datasetsSharing: "Which data will be made available after the end of the project?",
                sharingRational: "Are there any factors restricting or preventing the sharing of (some of) the data (e.g. as defined in an agreement with a 3rd party, legal restrictions)?",
                sharingRepos: "Where/how will the data be made available for reuse? ",
                accessProcedure: "Who will be able to access the data and under what conditions?",
                datasetsEmbargo: "When will the data be made available?",
                datasetsLicense: ["What licence will be used for Open Research Data?", "Datasets' license:"],
                costSharing: ["What are the expected costs for data sharing? How will these costs be covered?", "Costs for data sharing:"],
                costSharingCover: ["What are the expected costs for data sharing? How will these costs be covered?", "Funding for data sharing costs:"]
            },
            "8. Responsibilities": {
                RespDataDoc: "Who will be responsible for the data documentation and metadata?",
                RespDataStorage: "Who will be responsible for data storage and backup during the project?",
                RespDataArchiving: "Who will be responsible for ensuring data preservation and sharing?",
                RespDMP: "Who bears the end responsibility for updating and implementing this DMP?"
            },
        }
    },    
    erc: {
        sections: {
            "Project information": {
                projectNumber: "**FORCE_SHOW**Project number",
                projectAcronym: "**FORCE_SHOW**Project acronym",
            },
            
            "Summary": {
                newExistingData: ["collected/generated dataset", "New/Existing data:"],
                datasetsList: ["dataset reference and name", "Datasets list:"],
                datasetsOrigin: ["dataset origin", "Datasets origin:"],
                datasetsTypeFormat: ["data type and format", "Datasets type and format(s):"],
                datasetsVolume: ["dataset expected size", "Datasets volume:"],
            },
            "1. Making data findable": {
                datasetsMetadata: ["dataset description: metadata", "Use of metadata schema:"],
                datasetsIdentifier: ["dataset description: persistent and unique identifiers, DOI", "Use of identifier:"],
            },
            "2. Making data openly accessible": {
                formatSoftware: ["How the data can be accessed", "Software for file format(s):"],
                datasetsSharing: ["which data will be made openly available? which data will remain closed", "Access type per datasets:"],
                sharingRational: ["the reasons for not giving access", "Reasons for restricting access to datasets:"],
                sharingRepos: ["Where data are deposited. Where associated metadata and documentation are deposited. Where code are deposited", "Repositories list per dataset:"],
                accessProcedure: ["permission(+format)", "Access procedures per dataset:"],
                
            },
            "3. Making data interoperable": {
                datasetsOntology: ["Which standard or field-specific data and metadata vocabularies and methods will be used", "Use of ontology:"],
            },
            "4. Increase data reuse": {
                datasetsEmbargo: ["Is embargo forseen?", "Datasets releasing date:"],
                datasetsLicense: ["How data is licensed. What data will remain re-usable and for how long.", "Datasets' license:"],
                RespDataQuality: ["data quality assurance procedures", "Data quality assurance:"],
            },
            "5. Allocation of resources and data security": {
                costSharing: ["Estimated costs for making the project data open access", "Costs for data sharing:"],
                costSharingCover: ["Estimated costs for making the project data open access", "Funding for data sharing costs:"],
                storageDuringWhere: ["Procedure for data backup and recovery", "(Meta)Data Storage:"],
                storageDuringFrequency: ["Procedure for data backup and recovery", "(Meta)Data backup:"],
                costDuring: ["Procedure for data backup and recovery", "Costs for storage and backup:"],
                costDuringCover: ["Procedure for data backup and recovery", "Funding for storage and backup:"],
                securityDuring: ["Procedure for data backup and recovery", "Data security:"],
                datasetsListArchiving: ["secure storage in repositories for long term preservation and curation", "Data archiving:"],
                ArchivingWhere: ["secure storage in repositories for long term preservation and curation", "Archives:"],
                CostsArchiving: ["secure storage in repositories for long term preservation and curation", "Costs for archiving:"],
                CostsArchivingCover: ["secure storage in repositories for long term preservation and curation", "Funding for archiving:"],
                SecurityArchiving: ["secure storage in repositories for long term preservation and curation", "Archive security:"]
            },

        }
    },
    h2020: {
        sections: {
            "Project information": {
                projectNumber: "**FORCE_SHOW**Project number", // H2020 and ERC question are not shown in the output PDF, by adding **FORCE_SHOW** at the first of the question string, enforces to show      
                projectTitle: "**FORCE_SHOW**Project title",
                projectAcronym: "**FORCE_SHOW**Project acronym",
            },
            
            "DMP versioning": {
                versionNumber: "**FORCE_SHOW**Version number",           
                versionChanges: "**FORCE_SHOW**Description",
                dateFirstVersion: "**FORCE_SHOW**Date of the version",
                lastUpdate: "**FORCE_SHOW**Date of last update",
            },
            
            "1. Data summary": {
                newExistingData: ["Specify if existing data is being re-used (if any) and how", "New/Existing data:"],           
                datasetsPurpose: ["State the purpose of the data collection/generation. Explain the relation to the objectives of the project. Outline the data utility: to whom will it be useful", "Datasets purpose:"],
                datasetsOrigin: ["Specify the origin", "Datasets origin:"],
                datasetsTypeFormat: ["Specify the types and formats of data generated/collected ", "Datasets type and format(s):"],
                datasetsVolume: ["State the expected size of the data (if known) ", "Datasets volume:"],
            },
            "2.1 FAIR data: Making data findable, including provisions for metadata": {
                datasetsMetadata: ["Outline the discoverability of data (metadata provision). Specify standards for metadata creation (if any). If there are no standards in your discipline describe what type of metadata will be created and how", "Use of metadata schema:"],
                datasetsIdentifier: ["Outline the identifiability of data and refer to standard identification mechanism. Do you make use of persistent and unique identifiers such as Digital Object Identifiers?", "Use of identifier:"],
                datasetsDocs: ["Outline naming conventions used. Outline the approach towards search keyword. Outline the approach for clear versioning.", "Shared documentation about datasets:"],
            },
            "2.2 FAIR data: Making data openly accessible": {
                formatSoftware: ["Specify what methods or software tools are needed to access the data? Is documentation about the software needed to access the data included? Is it possible to include the relevant software (e.g. in open source code)?", "Software for file format(s):"],
                datasetsSharing: ["Specify which data will be made openly available?", "Access type per datasets:"],
                sharingRational: ["If some data is kept closed provide rationale for doing so (legal, contractual, voluntary)", "Reasons for restricting access to datasets:"],
                sharingRepos: ["Specify how the data will be made available. Specify where the data and associated metadata, documentation and code are deposited", "Repositories list per dataset:"],
                accessProcedure: ["Specify how access will be provided in case there are any restrictions", "Access procedures per dataset:"],
            },
            "2.4 FAIR data: Increase data re-use (through clarifying licenses)": {
                datasetsEmbargo: ["Specify when the data will be made available for re-use. If applicable, specify why and for what period a data embargo is needed", "Datasets releasing date:"],
                datasetsLicense: ["Specify how the data will be licenced to permit the widest reuse possible. Specify whether the data produced and/or used in the project is usable by third parties, in particular after the end of the project? If the re-use of some data is restricted, explain why. Specify the length of time for which the data will remain re-usable.", "Datasets' license:"],
                RespDataQuality: ["Describe data quality assurance processes", "Data quality assurance:"],
            },
            "2.3. FAIR data: Making data interoperable": {
                datasetsOntology: ["Specify whether you will be using standard vocabulary for all data types present in your data set, to allow inter-disciplinary interoperability? If not, will you provide mapping to more commonly used ontologies?", "Use of ontology:"],
            },
            "3. Allocation of resources": {
                costsFair: ["Estimate the costs for making your data FAIR. Describe how you intend to cover these costs", "Costs for making FAIR data:"],
                costsFairCover: ["Estimate the costs for making your data FAIR. Describe how you intend to cover these costs", "Funding for FAIR data costs:"],
                costSharing: ["Estimate the costs for making your data FAIR. Describe how you intend to cover these costs", "Costs for data sharing:"],
                costSharingCover: ["Estimate the costs for making your data FAIR. Describe how you intend to cover these costs", "Funding for data sharing costs:"],
                datasetsListArchiving: ["Describe costs and potential value of long term preservation", "Data archiving:"],
                ArchivingWhere: ["Describe costs and potential value of long term preservation", "Archives:"],
                CostsArchiving: ["Describe costs and potential value of long term preservation", "Costs for archiving:"],
                CostsArchivingCover: ["Describe costs and potential value of long term preservation", "Funding for archiving:"],
                RespDataDoc: ["Clearly identify responsibilities for data management in your project", "Responsibility for data documentation:"],
                RespDataStorage: ["Clearly identify responsibilities for data management in your project", "Responsibility for data management:"],
                RespDataArchiving: ["Clearly identify responsibilities for data management in your project", "Responsibility for preservation and sharing:"],
                RespDMP: ["Clearly identify responsibilities for data management in your project", "Responsibility for DMP:"],
            },
            "4. Data Security": {
                storageDuringWhere: ["Address data recovery as well as secure storage and transfer of sensitive data", "(Meta)Data Storage:"],
                storageDuringFrequency: ["Address data recovery as well as secure storage and transfer of sensitive data", "(Meta)Data backup:"],
                costDuring: ["Address data recovery as well as secure storage and transfer of sensitive data", "Costs for storage and backup:"],
                costDuringCover: ["Address data recovery as well as secure storage and transfer of sensitive data", "Funding for storage and backup:"],
                securityDuring: ["Address data recovery as well as secure storage and transfer of sensitive data", "Data security:"],
                SecurityArchiving: ["Address data recovery as well as secure storage and transfer of sensitive data", "Archive security:"],
            },
            "5. Ethical aspects": {
                PersonalData: ["Ethical aspects", "Use of personal /sensitive data:"],
                EthicalIssue: ["Ethical aspects", "Ethical issues:"],
            },
            "6. Other": {
                Other: ["Other", "Indicate whether other national/funder/sectorial/departmental procedures for data management are used."],
            },  
        }
    },
    horizoneurope: {
        sections: {
            "Project information": {
                projectNumber: "**FORCE_SHOW**Action number", // H2020 and ERC and HorizonEurope question are not shown in the output PDF, by adding **FORCE_SHOW** at the first of the question string, enforces to show      
                projectTitle: "**FORCE_SHOW**Action title",
                projectAcronym: "**FORCE_SHOW**Action acronym",
            },
            
            "DMP versioning": {
                versionNumber: "**FORCE_SHOW**DMP version",           
                lastUpdate: "**FORCE_SHOW**Date",
            },
            
            "1. Data Summary": {
                newExistingData: ["Will you re-use any existing data and what will you re-use it for? State the reasons if re-use of any existing data has been considered but discarded.", "New/Existing data:"],           
                datasetsPurpose: ["What is the purpose of the data generation or re-use and its relation to the objectives of the project? To whom might your data be useful ('data utility'), outside your project?", "Datasets purpose:"],
                datasetsOrigin: ["What is the origin/provenance of the data, either generated or re-used?", "Datasets origin:"],
                datasetsTypeFormat: ["What types and formats of data will the project generate or re-use?", "Datasets type and format(s):"],
                datasetsVolume: ["What is the expected size of the data that you intend to generate or re-use?", "Datasets volume:"],
            },
            "2.1 FAIR data: Making data findable, including provisions for metadata": {
                datasetsIdentifier: ["Will data be identified by a persistent identifier?", "Use of identifier:"],
                datasetsMetadata: ["Will rich metadata be provided to allow discovery? What metadata will be created? What disciplinary or general standards will be followed? In case metadata standards do not exist in your discipline, please outline what type of metadata will be created and how.", "Use of metadata schema:"],
                maDatasetsMetadata: ["Will search keywords be provided in the metadata to optimize the possibility for discovery and then potential re-use? Will metadata be offered in such a way that it can be harvested and indexed?", "Machine actionable (meta)data:"],
            },
            "2.2 FAIR data: Making data accessible": {
                sharingRepos: ["Will the data be deposited in a trusted repository? Have you explored appropriate arrangements with the identified repository where your data will be deposited?", "Repositories list per dataset:"],
                resolvedIdentifier: ["Does the repository ensure that the data is assigned an identifier? Will the repository resolve the identifier to a digital object?", "Repository identifier:"],
                datasetsSharing: ["Will all data be made openly available?", "Access type per datasets:"],
                sharingRational: ["If certain datasets cannot be shared (or need to be shared under restricted access conditions), explain why, clearly separating legal and contractual reasons from intentional restrictions. Note that in multi-beneficiary projects it is also possible for specific beneficiaries to keep their data closed if opening their data goes against their legitimate interests or other constraints as per the Grant Agreement.", "Reasons for restricting access to datasets:"],
                datasetsEmbargo: ["If an embargo is applied to give time to publish or seek protection of the intellectual property (e.g. patents), specify why and how long this will apply, bearing in mind that research data should be made available as soon as possible.", "Datasets releasing date:"],
                accessProcedure: ["Will the data be accessible through a free and standardized access protocol? If there are restrictions on use, how will access be provided to the data, both during and after the end of the project? How will the identity of the person accessing the data be ascertained? Is there a need for a data access committee (e.g. to evaluate/approve access requests to personal/sensitive data)?", "Access procedures per dataset:"],
                metadataLicence: ["Will metadata be made openly available and licenced under a public domain dedication CC0, as per the Grant Agreement? If not, please clarify why.", "Metadata licence:"],
                metadataSharing: ["How long will the data remain available and findable? Will metadata be guaranteed to remain available after data is no longer available?", "Metadata availability:"],
                formatSoftware: ["Will documentation or reference about any software be needed to access or read the data be included? Will it be possible to include the relevant software (e.g. in open source code)?", "Software for file format(s):"],
            },
            "2.4 FAIR data: Increase data re-use": {
                datasetsDocs: ["How will you provide documentation needed to validate data analysis and facilitate data re-use (e.g. readme files with information on methodology, codebooks, data cleaning, analyses, variable definitions, units of measurement, etc.)?", "Shared documentation about datasets:"],
                datasetsLicense: ["Will your data be made freely available in the public domain to permit the widest re-use possible? Will your data be licensed using standard reuse licenses, in line with the obligations set out in the Grant Agreement?", "Datasets' license:"],
                provenance: ["Will the provenance of the data be thoroughly documented using the appropriate standards?", "Provenance:"],
                LegalIssue: ["Will the data produced in the project be useable by third parties, in particular after the end of the project?", "Third parties usage:"],
                RespDataQuality: ["Describe all relevant data quality assurance processes.", "Data quality assurance:"],

            },
            "2.3. FAIR data: Making data interoperable": {
                datasetsOntology: ["What data and metadata vocabularies, standards, formats or methodologies will you follow to make your data interoperable to allow data exchange and re-use within and across disciplines? In case it is unavoidable that you use uncommon or generate project specific ontologies or vocabularies, will you provide mappings to more commonly used ontologies? Will you openly publish the generated ontologies or vocabularies to allow reusing, refining or extending them?","Use of ontology:"],
                maDatasetsOntology: ["Will you follow community-endorsed interoperability best practices? Which ones? Will your data include qualified references  to other data (e.g. other data from your project, or datasets from previous research)?", "Machine-actionable ontology and qualified reference:"],
            },
            "4. Allocation of resources": {
                costsFair: ["What will the costs be for making data or other research outputs FAIR in your project (e.g. direct and indirect costs related to storage, archiving, re-use, security, etc.)?", "Costs for making FAIR data:"],
                costsFairCover: ["How will these be covered? Note that costs related to research data/output management are eligible as part of the Horizon Europe grant (if compliant with the Grant Agreement conditions)", "Funding for FAIR data costs:"],
                costSharing: ["What will the costs be for making data or other research outputs FAIR in your project (e.g. direct and indirect costs related to storage, archiving, re-use, security, etc.)?s", "Costs for data sharing:"],
                costSharingCover: ["How will these be covered? Note that costs related to research data/output management are eligible as part of the Horizon Europe grant (if compliant with the Grant Agreement conditions)", "Funding for data sharing costs:"],
                storageDuringWhere: ["What will the costs be for making data or other research outputs FAIR in your project (e.g. direct and indirect costs related to storage, archiving, re-use, security, etc.)?", "(Meta)Data Storage:"],
                storageDuringFrequency: ["What will the costs be for making data or other research outputs FAIR in your project (e.g. direct and indirect costs related to storage, archiving, re-use, security, etc.)?", "(Meta)Data backup:"],
                costDuring: ["What will the costs be for making data or other research outputs FAIR in your project (e.g. direct and indirect costs related to storage, archiving, re-use, security, etc.)?", "Costs for storage and backup:"],
                costDuringCover: ["How will these be covered? Note that costs related to research data/output management are eligible as part of the Horizon Europe grant (if compliant with the Grant Agreement conditions)", "Funding for storage and backup:"],
                datasetsListArchiving: ["How will long term preservation be ensured? Discuss the necessary resources to accomplish this (costs and potential value, who decides and how, what data will be kept and for how long)?", "Data archiving:"],
                ArchivingWhere: ["How will long term preservation be ensured? Discuss the necessary resources to accomplish this (costs and potential value, who decides and how, what data will be kept and for how long)?", "Archives:"],
                CostsArchiving: ["What will the costs be for making data or other research outputs FAIR in your project (e.g. direct and indirect costs related to storage, archiving, re-use, security, etc.)?", "Costs for archiving:"],
                CostsArchivingCover: ["How will these be covered? Note that costs related to research data/output management are eligible as part of the Horizon Europe grant (if compliant with the Grant Agreement conditions)", "Funding for archiving:"],
                RespDataDoc: ["Who will be responsible for data management in your project?", "Responsibility for data documentation:"],
                RespDataStorage: ["Who will be responsible for data management in your project?", "Responsibility for data management:"],
                RespDataArchiving: ["Who will be responsible for data management in your project?", "Responsibility for preservation and sharing:"],
                RespDMP: ["Who will be responsible for data management in your project?", "Responsibility for DMP:"],
            },
            "5. Data Security": {
                securityDuring: ["What provisions are or will be in place for data security (including data recovery as well as secure storage/archiving and transfer of sensitive data)?", "Data security:"],
                SecurityArchiving: ["What provisions are or will be in place for data security (including data recovery as well as secure storage/archiving and transfer of sensitive data)?", "Archive security:"],
            },
            "6. Ethics": {
                PersonalData: ["Will informed consent for data sharing and long term preservation be included in questionnaires dealing with personal data?", "Use of personal /sensitive data:"],
                Consent: ["Will informed consent for data sharing and long term preservation be included in questionnaires dealing with personal data?", "Informed consent:"],
                EthicalIssue: ["Are there, or could there be, any ethics or legal issues that can have an impact on data sharing? These can also be discussed in the context of the ethics review. If relevant, include references to ethics deliverables and ethics chapter in the Description of the Action (DoA).", "Ethical issues:"],
            },
            "7. Other issues": {
                Other: ["Do you, or will you, make use of other national/funder/sectorial/departmental procedures for data management? If yes, which ones (please list and briefly describe them)?", "Indicate whether other national/funder/sectorial/departmental procedures for data management are used."],
            },
            "3. Other research outputs": {
                OtherOutputs: ["In addition to the management of data, beneficiaries should also consider and plan for the management of other research outputs that may be generated or re-used throughout their projects. Such outputs can be either digital (e.g. software, workflows, protocols, models, etc.) or physical (e.g. new materials, antibodies, reagents, samples, etc.). Beneficiaries should consider which of the questions pertaining to FAIR data above, can apply to the management of other research outputs, and should strive to provide sufficient detail on how their research outputs will be managed and shared, or made available for re-use, in line with the FAIR principles."],
            },    
        }
    }    
}




module.exports = data
