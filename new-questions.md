491) Which AWS infrastructure component ensures high availability by isolating workloads within a Region?
A. Edge Locations B. Availability Zones C. Data Centers D. AWS Global Accelerator

Correct Answer: B Explanation: Availability Zones are isolated locations within a Region, each with independent power, cooling, and networking. Deploying across multiple AZs ensures high availability and fault tolerance.

492) Which AWS service enables centralized monitoring of resource metrics and alarms to support operational excellence?
A. AWS Config B. Amazon CloudWatch C. AWS CloudTrail D. AWS Trusted Advisor

Correct Answer: B Explanation: CloudWatch collects and monitors metrics, logs, and events across AWS resources, enabling proactive operational management and automation.

493) In the Shared Responsibility Model, which task is AWS’s responsibility?
A. Encrypting customer data B. Managing IAM roles C. Physical security of data centers D. Configuring security groups

Correct Answer: C Explanation: AWS is responsible for “security of the cloud,” including physical security, hardware, and the global infrastructure. Customers handle “security in the cloud,” such as IAM and data encryption.

494) Which AWS service provides durable, asynchronous messaging to decouple microservices?
A. Amazon SNS B. Amazon SQS C. AWS Step Functions D. Amazon Kinesis

Correct Answer: B Explanation: Amazon SQS is a fully managed message queuing service that enables loose coupling and reliable communication between distributed components.

495) Which AWS pricing model allows customers to bid for unused EC2 capacity at reduced rates?
A. On-Demand Instances B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: C Explanation: Spot Instances let customers purchase unused EC2 capacity at discounted prices, ideal for flexible, fault-tolerant workloads.

496) Which pillar of the AWS Well-Architected Framework emphasizes automating security best practices and protecting data in transit and at rest?
A. Reliability B. Security C. Operational Excellence D. Performance Efficiency

Correct Answer: B Explanation: The Security pillar focuses on identity foundations, traceability, layered defenses, automation, and data protection.

497) Which AWS service provides on-demand access to compliance reports and documentation?
A. AWS Artifact B. AWS Security Hub C. AWS Inspector D. AWS Config

Correct Answer: A Explanation: AWS Artifact centralizes compliance reports and documentation, helping customers meet regulatory requirements.

498) Which AWS Support Plan provides a dedicated Technical Account Manager (TAM) and concierge support?
A. Basic B. Developer C. Business D. Enterprise

Correct Answer: D Explanation: The Enterprise Support Plan includes TAMs, concierge services, proactive guidance, and the fastest response times for mission-critical workloads.

499) Which AWS service enables tracking configuration changes to resources for compliance auditing?
A. AWS CloudTrail B. AWS Config C. AWS Systems Manager D. Amazon GuardDuty

Correct Answer: B Explanation: AWS Config continuously records resource configurations and changes, enabling compliance auditing and security analysis.

500) Which AWS Cloud Adoption Framework (CAF) perspective focuses on organizational culture, training, and role development?
A. Business B. People C. Governance D. Operations

Correct Answer: B Explanation: The People perspective addresses organizational change management, training, and skill development to support cloud adoption.

501) Which AWS service provides automatic database patching and backups to reduce IT overhead?
A. Amazon RDS B. Amazon DynamoDB C. AWS Backup D. AWS Systems Manager

Correct Answer: A Explanation: Amazon RDS automates patching, backups, and replication, freeing IT teams from manual database maintenance.

502) Which AWS service is best suited for real-time analysis of streaming data?
A. Amazon QuickSight B. Amazon Redshift C. Amazon Kinesis Data Analytics D. AWS Data Pipeline

Correct Answer: C Explanation: Kinesis Data Analytics enables SQL-based real-time processing of streaming data from Kinesis or Kafka.

503) Which AWS service provides SSL/TLS certificate management for securing data in transit?
A. AWS KMS B. AWS Certificate Manager (ACM) C. AWS CloudHSM D. AWS Secrets Manager

Correct Answer: B Explanation: ACM manages SSL/TLS certificates, simplifying secure communication between applications and end-users.

504) Which AWS billing tool allows businesses to set custom cost and usage thresholds with alerts?
A. AWS Cost Explorer B. AWS Budgets C. AWS CUR D. AWS Organizations

Correct Answer: B Explanation: AWS Budgets lets customers define spending limits and receive alerts when usage or costs exceed thresholds.

AWS Cloud Concepts
501) Which AWS feature allows customers to scale resources up or down automatically based on demand? A. Elastic Load Balancing B. Auto Scaling C. AWS Config D. AWS CloudTrail

Correct Answer: B Explanation: Auto Scaling adjusts compute capacity dynamically to meet demand, ensuring elasticity and cost efficiency.

502) Which AWS benefit refers to paying only for the resources you consume? A. Scalability B. Pay-as-you-go pricing C. Fault tolerance D. High availability

Correct Answer: B Explanation: AWS uses a consumption-based pricing model, eliminating upfront costs and enabling cost optimization.

Global Infrastructure
503) Which AWS infrastructure component caches content closer to end-users? A. Availability Zones B. Edge Locations C. Data Centers D. Regions

Correct Answer: B Explanation: Edge Locations are part of CloudFront’s CDN, reducing latency by caching content near users.

504) Which AWS infrastructure design principle ensures workloads remain operational during AZ failures? A. Scalability B. Fault tolerance C. Elasticity D. Modularity

Correct Answer: B Explanation: Fault tolerance ensures workloads continue functioning even when components fail, achieved by multi-AZ deployments.

Security & Compliance
505) Which AWS service provides automated compliance checks and configuration tracking? A. AWS Config B. AWS CloudTrail C. AWS Shield D. Amazon Inspector

Correct Answer: A Explanation: AWS Config records configuration changes and evaluates compliance against defined rules.

506) In the Shared Responsibility Model, who is responsible for patching the operating system of EC2 instances? A. AWS B. The customer C. Both AWS and the customer D. Trusted Advisor

Correct Answer: B Explanation: Customers manage OS-level patching, while AWS secures the underlying infrastructure.

Technology (Core Services)
507) Which AWS service provides serverless compute that runs code without provisioning servers? A. Amazon EC2 B. AWS Lambda C. Amazon ECS D. AWS Elastic Beanstalk

Correct Answer: B Explanation: Lambda executes code in response to events, scaling automatically without server management.

508) Which AWS database service is fully managed and supports SQL queries? A. Amazon DynamoDB B. Amazon RDS C. Amazon S3 D. Amazon Aurora

Correct Answer: B Explanation: Amazon RDS is a managed relational database service supporting engines like MySQL, PostgreSQL, and Oracle.

Billing & Pricing
509) Which AWS tool provides visualizations of historical and forecasted spending? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: B Explanation: Cost Explorer enables visualization of usage and costs over time, supporting trend analysis.

510) Which pricing model offers the deepest discounts for flexible workloads? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: C Explanation: Spot Instances allow bidding for unused EC2 capacity at reduced prices, ideal for fault-tolerant workloads.

CAF
511) Which CAF perspective focuses on aligning IT strategy with business outcomes? A. People B. Governance C. Business D. Operations

Correct Answer: C Explanation: The Business perspective ensures IT initiatives deliver measurable business value.

512) Which CAF perspective emphasizes organizational change management and training? A. People B. Security C. Platform D. Governance

Correct Answer: A Explanation: The People perspective addresses culture, skills, and training for successful cloud adoption.

Well-Architected Framework
513) Which pillar emphasizes designing systems to recover automatically from failure? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: B Explanation: Reliability ensures workloads can withstand and recover from failures through automation and redundancy.

514) Which pillar emphasizes democratizing advanced technologies and going global in minutes? A. Performance Efficiency B. Operational Excellence C. Security D. Cost Optimization

Correct Answer: A Explanation: Performance Efficiency focuses on optimizing resources and leveraging advanced technologies globally.

Support Plans
515) Which AWS Support Plan provides 24/7 access with <1 hour response time for critical issues? A. Developer B. Business C. Enterprise D. Basic

Correct Answer: B Explanation: Business Support offers 24/7 access, contextual guidance, and faster response times for production workloads.

516) Which AWS Support Plan includes a dedicated Technical Account Manager (TAM)? A. Developer B. Business C. Enterprise D. Basic

Correct Answer: C Explanation: Enterprise Support provides TAMs, concierge services, and proactive guidance for mission-critical workloads.

Security & Compliance (30 Questions)
517) Which AWS service provides DDoS protection at no additional cost for all customers? A. AWS Shield Standard B. AWS WAF C. Amazon GuardDuty D. AWS Security Hub

Correct Answer: A Explanation: Shield Standard is automatically included with AWS accounts, protecting against common DDoS attacks.

518) Which AWS service records API calls for auditing and compliance purposes? A. AWS Config B. AWS CloudTrail C. Amazon CloudWatch D. AWS Trusted Advisor

Correct Answer: B Explanation: CloudTrail logs API calls, providing visibility into user activity and enabling compliance auditing.

519) Which AWS service aggregates and prioritizes security findings across multiple services? A. AWS Security Hub B. Amazon GuardDuty C. AWS Inspector D. AWS Artifact

Correct Answer: A Explanation: Security Hub centralizes findings from GuardDuty, Inspector, and partner tools, providing a unified view.

520) Which AWS service continuously monitors for malicious activity and unauthorized behavior? A. AWS Config B. Amazon GuardDuty C. AWS Artifact D. AWS Shield

Correct Answer: B Explanation: GuardDuty analyzes logs and network traffic to detect threats such as compromised accounts or malware.

521) Which AWS service provides automated vulnerability assessments of EC2 instances? A. AWS Inspector B. AWS Config C. AWS Trusted Advisor D. AWS Artifact

Correct Answer: A Explanation: Inspector runs automated security assessments to identify vulnerabilities in EC2 and container workloads.

522) Which AWS service provides on-demand access to compliance reports? A. AWS Artifact B. AWS Security Hub C. AWS Config D. AWS CloudTrail

Correct Answer: A Explanation: Artifact centralizes compliance documentation, such as SOC and ISO reports, for customer access.

523) Which AWS service acts as a virtual firewall for EC2 instances? A. Security Groups B. Network ACLs C. AWS Shield D. AWS WAF

Correct Answer: A Explanation: Security Groups control inbound and outbound traffic at the instance level.

524) Which AWS service provides subnet-level traffic filtering? A. Security Groups B. Network ACLs C. AWS Shield D. AWS WAF

Correct Answer: B Explanation: Network ACLs provide an additional layer of security by filtering traffic at the subnet level.

525) Which AWS service protects web applications from SQL injection and XSS attacks? A. AWS WAF B. AWS Shield C. AWS Inspector D. AWS Config

Correct Answer: A Explanation: WAF filters HTTP requests using customizable rules to block common exploits.

526) Which AWS service provides encryption key management? A. AWS KMS B. AWS CloudHSM C. AWS Secrets Manager D. AWS Certificate Manager

Correct Answer: A Explanation: KMS manages encryption keys for securing data at rest and in transit.

527) Which AWS service provides hardware security modules for managing encryption keys? A. AWS KMS B. AWS CloudHSM C. AWS Secrets Manager D. AWS Certificate Manager

Correct Answer: B Explanation: CloudHSM offers dedicated hardware modules for secure key storage and management.

528) Which AWS service manages SSL/TLS certificates? A. AWS KMS B. AWS CloudHSM C. AWS Certificate Manager D. AWS Secrets Manager

Correct Answer: C Explanation: ACM simplifies certificate provisioning and renewal for secure communication.

529) Which AWS service stores and rotates secrets such as API keys? A. AWS Secrets Manager B. AWS KMS C. AWS CloudHSM D. AWS Config

Correct Answer: A Explanation: Secrets Manager securely stores and rotates credentials, reducing exposure risk.

530) Which AWS service provides centralized logging of resource changes for compliance? A. AWS Config B. AWS CloudTrail C. Amazon CloudWatch D. AWS Security Hub

Correct Answer: A Explanation: Config tracks resource configurations and changes, enabling compliance auditing.

531) Which AWS service provides monitoring and alerting for metrics and logs? A. Amazon CloudWatch B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: CloudWatch collects metrics and logs, enabling monitoring and automated alerts.

532) Which AWS service provides visibility into account activity by recording API calls? A. AWS CloudTrail B. AWS Config C. AWS Security Hub D. AWS Trusted Advisor

Correct Answer: A Explanation: CloudTrail records API calls, supporting auditing and compliance.

533) Which AWS service provides recommendations for cost, performance, and security optimization? A. AWS Trusted Advisor B. AWS Config C. AWS Inspector D. AWS Artifact

Correct Answer: A Explanation: Trusted Advisor analyzes accounts and provides best practice recommendations.

534) Which AWS service provides centralized compliance resources and documentation? A. AWS Artifact B. AWS Security Hub C. AWS Config D. AWS Inspector

Correct Answer: A Explanation: Artifact provides compliance reports and documentation for regulatory requirements.

535) Which AWS service provides automated patching of managed nodes? A. AWS Systems Manager Patch Manager B. AWS Config C. AWS Inspector D. AWS Trusted Advisor

Correct Answer: A Explanation: Patch Manager automates patching for EC2 and on-premises servers.

536) Which AWS service provides centralized operational data for troubleshooting? A. AWS Systems Manager B. AWS Config C. AWS CloudTrail D. AWS Security Hub

Correct Answer: A Explanation: Systems Manager aggregates operational data and enables automation for management tasks.

537) Which AWS service provides automated backups across multiple services? A. AWS Backup B. Amazon RDS C. AWS Config D. AWS CloudTrail

Correct Answer: A Explanation: AWS Backup centralizes and automates backup tasks across AWS services.

538) Which AWS service provides intrusion detection and threat monitoring? A. Amazon GuardDuty B. AWS Security Hub C. AWS Inspector D. AWS Shield

Correct Answer: A Explanation: GuardDuty detects threats by analyzing logs and network traffic.

539) Which AWS service provides centralized access control across multiple accounts? A. AWS Organizations B. AWS IAM C. AWS Config D. AWS Security Hub

Correct Answer: A Explanation: Organizations enables centralized management of accounts, policies, and access.

540) Which AWS service provides fine-grained access control to resources? A. AWS IAM B. AWS Organizations C. AWS Config D. AWS Security Hub

Correct Answer: A Explanation: IAM manages users, roles, and policies for resource access control.

541) Which AWS service provides compliance auditing by tracking resource changes? A. AWS Config B. AWS CloudTrail C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: Config records resource configurations and changes for compliance auditing.

542) Which AWS service provides centralized monitoring of account health? A. AWS Personal Health Dashboard B. AWS Config C. AWS CloudTrail D. AWS Security Hub

Correct Answer: A Explanation: The Personal Health Dashboard provides visibility into AWS service health affecting your account.

543) Which AWS service provides automated compliance checks for best practices? A. AWS Config B. AWS Trusted Advisor C. AWS Inspector D. AWS Artifact

Correct Answer: B Explanation: Trusted Advisor provides automated checks for security, performance, and cost optimization.

544) Which AWS service provides centralized threat detection and prioritization? A. AWS Security Hub B. Amazon GuardDuty C. AWS Inspector D. AWS Config

Correct Answer: A Explanation: Security Hub aggregates findings from multiple services and prioritizes them.

545) Which AWS service provides encryption for data at rest and in transit? A. AWS KMS B. AWS CloudHSM C. AWS Certificate Manager D. AWS Secrets Manager

Correct Answer: A Explanation: KMS manages encryption keys for securing data at rest and in transit.

Technology (Core Services) – 30 Questions
546) Which AWS service provides object storage with virtually unlimited scalability? A. Amazon EBS B. Amazon S3 C. Amazon RDS D. Amazon DynamoDB

Correct Answer: B Explanation: Amazon S3 is a highly durable, scalable object storage service designed for storing and retrieving any amount of data.

547) Which AWS service provides block-level storage for EC2 instances? A. Amazon S3 B. Amazon EBS C. Amazon Glacier D. Amazon DynamoDB

Correct Answer: B Explanation: EBS provides persistent block storage volumes for EC2, supporting high-performance workloads.

548) Which AWS service provides relational database management with automated patching and backups? A. Amazon RDS B. Amazon DynamoDB C. Amazon Aurora D. Amazon Redshift

Correct Answer: A Explanation: RDS is a managed relational database service that automates backups, patching, and scaling.

549) Which AWS service provides a serverless relational database compatible with MySQL and PostgreSQL? A. Amazon RDS B. Amazon Aurora Serverless C. Amazon DynamoDB D. Amazon Neptune

Correct Answer: B Explanation: Aurora Serverless automatically scales database capacity based on workload demand.

550) Which AWS service provides a fully managed NoSQL database? A. Amazon RDS B. Amazon DynamoDB C. Amazon Aurora D. Amazon Neptune

Correct Answer: B Explanation: DynamoDB is a managed NoSQL database offering single-digit millisecond latency and automatic scaling.

551) Which AWS service provides in-memory caching for high-performance applications? A. Amazon ElastiCache B. Amazon RDS C. Amazon DynamoDB D. Amazon S3

Correct Answer: A Explanation: ElastiCache supports Redis and Memcached, enabling low-latency caching for applications.

552) Which AWS service provides petabyte-scale data warehousing? A. Amazon RDS B. Amazon Redshift C. Amazon DynamoDB D. Amazon Aurora

Correct Answer: B Explanation: Redshift is a managed data warehouse optimized for large-scale analytics.

553) Which AWS service provides serverless compute triggered by events? A. Amazon EC2 B. AWS Lambda C. Amazon ECS D. AWS Elastic Beanstalk

Correct Answer: B Explanation: Lambda executes code in response to events, scaling automatically without server provisioning.

554) Which AWS service provides container orchestration with EC2 or Fargate? A. Amazon ECS B. Amazon EKS C. AWS Lambda D. AWS Batch

Correct Answer: A Explanation: ECS is a container orchestration service that runs Docker containers on EC2 or Fargate.

555) Which AWS service provides managed Kubernetes clusters? A. Amazon ECS B. Amazon EKS C. AWS Lambda D. AWS Batch

Correct Answer: B Explanation: EKS runs Kubernetes clusters on AWS, integrating with IAM and networking services.

556) Which AWS service provides batch computing at scale? A. AWS Batch B. AWS Lambda C. Amazon ECS D. Amazon EKS

Correct Answer: A Explanation: AWS Batch schedules and runs batch computing jobs efficiently across EC2 and Spot Instances.

557) Which AWS service provides virtual private networks for secure resource isolation? A. Amazon VPC B. AWS Shield C. AWS WAF D. AWS Config

Correct Answer: A Explanation: VPC allows customers to define isolated network environments with subnets, routing, and firewalls.

558) Which AWS service provides DNS-based routing for applications? A. Amazon Route 53 B. AWS Global Accelerator C. Amazon CloudFront D. AWS Shield

Correct Answer: A Explanation: Route 53 is a scalable DNS service that routes traffic globally with health checks and failover.

559) Which AWS service accelerates global application traffic using AWS backbone infrastructure? A. Amazon Route 53 B. AWS Global Accelerator C. Amazon CloudFront D. AWS Shield

Correct Answer: B Explanation: Global Accelerator improves performance by routing traffic through AWS’s global network.

560) Which AWS service provides content delivery via edge locations? A. Amazon CloudFront B. AWS Global Accelerator C. Amazon Route 53 D. AWS Shield

Correct Answer: A Explanation: CloudFront caches content at edge locations, reducing latency for end-users.

561) Which AWS service provides monitoring and alerting for metrics and logs? A. Amazon CloudWatch B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: CloudWatch collects metrics and logs, enabling monitoring and automated alerts.

562) Which AWS service records API calls for auditing? A. AWS CloudTrail B. AWS Config C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: CloudTrail records API calls, supporting compliance and auditing.

563) Which AWS service tracks resource configurations and compliance? A. AWS Config B. AWS CloudTrail C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: Config records resource configurations and evaluates compliance against rules.

564) Which AWS service provides centralized operational management and automation? A. AWS Systems Manager B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: Systems Manager aggregates operational data and enables automation for management tasks.

565) Which AWS service provides managed workflows for application deployment? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: A Explanation: CodePipeline automates application build, test, and deployment workflows.

566) Which AWS service provides source control for code repositories? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: B Explanation: CodeCommit is a managed Git-based source control service.

567) Which AWS service provides build automation for applications? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: C Explanation: CodeBuild compiles source code, runs tests, and produces deployable artifacts.

568) Which AWS service provides automated application deployment to EC2 or Lambda? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: D Explanation: CodeDeploy automates application deployments across EC2, Lambda, and on-premises servers.

569) Which AWS service provides managed workflows for serverless applications? A. AWS Step Functions B. AWS Lambda C. Amazon ECS D. AWS Batch

Correct Answer: A Explanation: Step Functions orchestrate serverless workflows using state machines.

570) Which AWS service provides managed API endpoints for applications? A. Amazon API Gateway B. AWS Lambda C. Amazon ECS D. AWS Step Functions

Correct Answer: A Explanation: API Gateway creates and manages APIs, integrating with Lambda and backend services.

571) Which AWS service provides managed search and analytics for log data? A. Amazon OpenSearch Service B. Amazon CloudWatch C. AWS Config D. AWS Inspector

Correct Answer: A Explanation: OpenSearch Service provides search and analytics capabilities for logs and metrics.

572) Which AWS service provides managed desktop and application streaming? A. Amazon WorkSpaces B. Amazon AppStream 2.0 C. Amazon WorkDocs D. Amazon Chime

Correct Answer: B Explanation: AppStream 2.0 streams applications securely to end-users without local installation.

573) Which AWS service provides managed virtual desktops? A. Amazon WorkSpaces B. Amazon AppStream 2.0 C. Amazon WorkDocs D. Amazon Chime

Correct Answer: A Explanation: WorkSpaces delivers managed virtual desktops in the cloud.

574) Which AWS service provides managed video conferencing and chat? A. Amazon Chime B. Amazon WorkDocs C. Amazon WorkSpaces D. Amazon AppStream 2.0

Correct Answer: A Explanation: Chime provides secure video conferencing, chat, and collaboration tools.

Advanced Technology-Focused Questions (Batch 1 of 4)
575) Which AWS storage option provides millisecond latency for frequently accessed data but is not object-based? A. Amazon S3 Standard B. Amazon EBS General Purpose SSD C. Amazon Glacier Instant Retrieval D. Amazon DynamoDB

Correct Answer: B Explanation: EBS provides block-level storage with low-latency access, unlike S3 which is object-based.

576) Which AWS service allows horizontal scaling of relational databases without manual sharding? A. Amazon RDS Multi-AZ B. Amazon Aurora C. Amazon DynamoDB D. Amazon Redshift

Correct Answer: B Explanation: Aurora supports read replicas and global databases, enabling horizontal scaling without manual sharding.

577) Which AWS service provides automatic scaling of containers without requiring EC2 management? A. Amazon ECS with EC2 launch type B. Amazon EKS C. AWS Fargate D. AWS Batch

Correct Answer: C Explanation: Fargate runs containers serverlessly, scaling automatically without EC2 provisioning.

578) Which AWS service provides managed Hadoop and Spark clusters? A. Amazon EMR B. Amazon Redshift C. AWS Glue D. AWS Data Pipeline

Correct Answer: A Explanation: EMR manages big data frameworks like Hadoop and Spark for large-scale analytics.

579) Which AWS service provides schema-less storage optimized for key-value queries? A. Amazon RDS B. Amazon DynamoDB C. Amazon Aurora D. Amazon Neptune

Correct Answer: B Explanation: DynamoDB is a NoSQL database optimized for key-value and document queries.

580) Which AWS service provides graph database capabilities for highly connected datasets? A. Amazon Aurora B. Amazon Neptune C. Amazon DynamoDB D. Amazon Redshift

Correct Answer: B Explanation: Neptune is a managed graph database supporting Gremlin and SPARQL queries.

581) Which AWS service provides managed ETL for preparing data for analytics? A. AWS Glue B. Amazon EMR C. AWS Data Pipeline D. Amazon Kinesis

Correct Answer: A Explanation: Glue is a serverless ETL service that prepares and transforms data for analytics.

582) Which AWS service provides durable, asynchronous messaging with exactly-once processing guarantees? A. Amazon SNS B. Amazon SQS Standard C. Amazon SQS FIFO D. Amazon Kinesis

Correct Answer: C Explanation: SQS FIFO queues guarantee message order and exactly-once processing.

583) Which AWS service provides near-real-time log ingestion and search capabilities? A. Amazon CloudWatch Logs B. Amazon OpenSearch Service C. AWS Config D. AWS Glue

Correct Answer: B Explanation: OpenSearch Service enables near-real-time log ingestion, indexing, and search.

584) Which AWS service provides managed workflows for orchestrating serverless applications? A. AWS Step Functions B. AWS Lambda C. Amazon ECS D. AWS Batch

Correct Answer: A Explanation: Step Functions orchestrate serverless workflows using state machines.

585) Which AWS service provides managed APIs with caching and throttling features? A. Amazon API Gateway B. AWS Lambda C. Amazon ECS D. AWS Step Functions

Correct Answer: A Explanation: API Gateway manages APIs with features like caching, throttling, and authorization.

586) Which AWS service provides managed desktop virtualization? A. Amazon WorkSpaces B. Amazon AppStream 2.0 C. Amazon Chime D. Amazon WorkDocs

Correct Answer: A Explanation: WorkSpaces delivers managed virtual desktops in the cloud.

587) Which AWS service streams applications securely to end-users without local installation? A. Amazon WorkSpaces B. Amazon AppStream 2.0 C. Amazon Chime D. Amazon WorkDocs

Correct Answer: B Explanation: AppStream 2.0 streams applications securely to end-users.

588) Which AWS service provides managed video conferencing and chat? A. Amazon Chime B. Amazon WorkDocs C. Amazon WorkSpaces D. Amazon AppStream 2.0

Correct Answer: A Explanation: Chime provides secure video conferencing and collaboration tools.

589) Which AWS service provides managed document collaboration with versioning? A. Amazon WorkDocs B. Amazon Chime C. Amazon WorkSpaces D. Amazon AppStream 2.0

Correct Answer: A Explanation: WorkDocs enables secure document collaboration with version control.

590) Which AWS service provides managed search for application data? A. Amazon OpenSearch Service B. Amazon CloudWatch C. AWS Config D. AWS Glue

Correct Answer: A Explanation: OpenSearch Service provides search and analytics for application data.

591) Which AWS service provides managed streaming data ingestion at scale? A. Amazon Kinesis Data Streams B. Amazon SQS C. Amazon SNS D. AWS Glue

Correct Answer: A Explanation: Kinesis Data Streams ingests streaming data at scale for real-time processing.

592) Which AWS service provides SQL-based real-time analytics on streaming data? A. Amazon Kinesis Data Analytics B. Amazon Redshift C. AWS Glue D. Amazon EMR

Correct Answer: A Explanation: Kinesis Data Analytics enables SQL-based real-time analytics on streaming data.

593) Which AWS service provides managed ETL pipelines with scheduling? A. AWS Data Pipeline B. AWS Glue C. Amazon EMR D. Amazon Redshift

Correct Answer: A Explanation: Data Pipeline orchestrates ETL workflows with scheduling and dependency management.

594) Which AWS service provides managed big data analytics with SQL queries? A. Amazon Redshift B. Amazon RDS C. Amazon DynamoDB D. Amazon Aurora

Correct Answer: A Explanation: Redshift is a managed data warehouse optimized for SQL-based analytics.

595) Which AWS service provides managed machine learning model deployment? A. Amazon SageMaker B. AWS Lambda C. Amazon ECS D. AWS Glue

Correct Answer: A Explanation: SageMaker enables building, training, and deploying machine learning models.

596) Which AWS service provides managed messaging for pub/sub communication? A. Amazon SNS B. Amazon SQS C. Amazon Kinesis D. AWS Step Functions

Correct Answer: A Explanation: SNS provides pub/sub messaging for broadcasting messages to multiple subscribers.

597) Which AWS service provides managed event bus for application integration? A. Amazon EventBridge B. Amazon SNS C. Amazon SQS D. AWS Step Functions

Correct Answer: A Explanation: EventBridge provides event-driven integration across AWS services and SaaS applications.

598) Which AWS service provides managed caching for APIs? A. Amazon API Gateway B. AWS Lambda C. Amazon ECS D. AWS Step Functions

Correct Answer: A Explanation: API Gateway supports caching responses to improve performance and reduce backend load.

599) Which AWS service provides managed monitoring of application performance? A. Amazon CloudWatch B. AWS X-Ray C. AWS Config D. AWS Inspector

Correct Answer: B Explanation: X-Ray provides distributed tracing to monitor application performance and troubleshoot bottlenecks.


Advanced technology-focused questions (Batch 2 of 4: 600–624)
600) Which VPC construct must be present for instances in a public subnet to receive inbound traffic from the internet? A. NAT Gateway B. Internet Gateway C. VPC Endpoint D. Transit Gateway

Correct Answer: B Explanation: An Internet Gateway enables bidirectional internet connectivity. NAT Gateways provide outbound-only internet for private subnets.

601) You need private S3 access from a private subnet without traversing the public internet. Which option is most appropriate? A. NAT Gateway + public S3 endpoint B. Internet Gateway + route to S3 C. Interface VPC Endpoint (AWS PrivateLink) for S3 D. Gateway VPC Endpoint for S3

Correct Answer: D Explanation: S3 uses Gateway Endpoints for private access. Interface endpoints are for services like CloudWatch, Secrets Manager, etc.

602) Which design minimizes cross-AZ traffic charges for a stateful service on EC2? A. Single ASG spanning two AZs with sticky sessions disabled B. Two ASGs (one per AZ) with NLB per AZ and session affinity enabled C. One ALB across two AZs with all targets in a single AZ D. Global Accelerator with TCP listeners to EC2 in two AZs

Correct Answer: B Explanation: Zonal load balancing with per-AZ targets and session affinity limits cross-AZ traffic for stateful apps.

603) Which storage choice best fits a low-latency transactional database on a single EC2 instance? A. S3 Standard B. EFS C. EBS io2 Block Express D. EBS Cold HDD (sc1)

Correct Answer: C Explanation: EBS io2 Block Express provides high IOPS, low latency, and durability required for transactional databases.

604) For a workload needing shared POSIX file semantics across multiple EC2 instances with burst scaling, what’s the best fit? A. EBS multi-attach B. S3 with Transfer Acceleration C. EFS with bursting or provisioned throughput D. FSx for Lustre scratch filesystem

Correct Answer: C Explanation: EFS is NFS-compatible and supports shared access with elastic performance. EBS multi-attach has limited use cases.

605) You must ingest IoT telemetry at scale, then expose ordered processing and exactly-once semantics. Which combo fits best? A. SNS + Lambda B. Kinesis Data Streams + Kinesis Data Analytics (SQL) + Lambda C. SQS Standard + Lambda + DynamoDB D. SQS FIFO + Lambda + EventBridge

Correct Answer: B Explanation: Kinesis provides ordered shards and integrates with Kinesis Data Analytics. Exactly-once processing can be achieved via idempotency downstream.

606) Which approach provides least operational overhead for containerized microservices with unpredictable spikes? A. ECS on EC2 with Cluster Auto Scaling B. EKS on EC2 with Managed Node Groups C. ECS on Fargate with Service Auto Scaling D. EKS on Fargate with DaemonSets

Correct Answer: C Explanation: ECS on Fargate removes node management and scales tasks automatically with minimal ops burden.

607) You need to serve global static web content with TLS, geoblocking, and WAF rules. Which architecture is optimal? A. S3 Static Website + Route 53 B. S3 + CloudFront + ACM + AWS WAF C. ALB + EC2 + WAF + Shield Advanced D. Global Accelerator + NLB + EC2

Correct Answer: B Explanation: CloudFront integrates with ACM for TLS at the edge and with AWS WAF for application-layer protections.

608) To minimize cold starts for a latency-sensitive Lambda API, which strategy is most effective? A. Increase function memory only B. Use Provisioned Concurrency C. Switch to x86_64 runtime from arm64 D. Add async invocation with EventBridge

Correct Answer: B Explanation: Provisioned Concurrency keeps execution environments warm, reducing cold start latency.

609) Which database option is optimal for a globally distributed read-heavy key-value workload with single-digit ms latency? A. Aurora Global Database B. DynamoDB Global Tables C. RDS Multi-AZ with read replicas D. Redshift with concurrency scaling

Correct Answer: B Explanation: DynamoDB Global Tables replicate across regions and serve low-latency reads and writes globally.

610) You need strict message ordering and deduplication for a payment pipeline. What should you select? A. SQS Standard with delay queues B. SNS to multiple SQS Standard queues C. SQS FIFO with content-based deduplication D. Kinesis Firehose to S3 with partition keys

Correct Answer: C Explanation: SQS FIFO guarantees ordering and supports deduplication suited for payment pipelines.

611) Which ALB feature helps distribute traffic to microservices without client-visible path changes? A. Host-based routing only B. Path-based routing with rewrite rules C. Weighted target groups with stickiness D. HTTP/3 QUIC listeners

Correct Answer: B Explanation: ALB supports path-based routing combined with header rewrites via rules to route to microservices seamlessly.

612) You must securely rotate DB credentials used by ECS tasks without redeploying containers. Best option? A. Store credentials in S3 and rotate via lifecycle policy B. Use Parameter Store plaintext with 30-day rotation C. Use Secrets Manager with automatic rotation via Lambda D. Bake credentials into container images and rotate monthly

Correct Answer: C Explanation: Secrets Manager supports automated rotation and ECS integrations via task execution roles.

613) Which choice optimizes high-throughput writes to S3 with lowest per-request overhead? A. Single large multipart upload B. Many small PUT requests C. Upload via Kinesis Firehose to S3 D. Upload via CloudFront PUT methods

Correct Answer: A Explanation: Multipart uploads optimize large object transfers, reduce failures, and improve throughput efficiency.

614) You need low-latency access to frequently-changing metadata shared across services. Best fit? A. DynamoDB + DAX B. S3 + Glacier Deep Archive C. RDS + Multi-AZ D. Redshift + Spectrum

Correct Answer: A Explanation: DAX provides in-memory caching for DynamoDB, reducing read latency to microseconds.

615) Which approach improves performance for compute-heavy Lambda workloads without changing code semantics? A. Increase timeout B. Increase memory allocation C. Add reserved concurrency D. Reduce provisioned concurrency

Correct Answer: B Explanation: Increasing Lambda memory also increases CPU proportionally, improving compute-bound performance.

616) Which networking feature enables private connectivity to supported AWS services without public IPs? A. Internet Gateway B. Gateway Endpoint C. Interface Endpoint (PrivateLink) D. NAT Gateway

Correct Answer: C Explanation: Interface endpoints (PrivateLink) provide private IP connectivity to supported services.

617) For a high-IOPS database on EC2 requiring durability and fast failover, which combo is best? A. EBS gp3 + manual snapshots B. EBS io2 + Multi-Attach across AZs C. EBS io2 + RAID0 D. EBS io2 Block Express + frequent snapshots + AZ-aware architecture

Correct Answer: D Explanation: io2 Block Express provides high durability/IOPS; snapshots aid recovery; AZ-aware design supports resilient failover.

618) You need to run short-lived container jobs on a schedule with minimal management. Pick the best fit. A. ECS on EC2 + cron inside containers B. ECS on Fargate with EventBridge scheduled tasks C. EKS on EC2 with Kubernetes CronJobs D. EC2 Auto Scaling + user data scripts

Correct Answer: B Explanation: ECS on Fargate with EventBridge scheduled tasks provides serverless, minimal-op scheduling for containers.

619) Which design reduces blast radius for a tiered microservices architecture under partial regional failure? A. One ALB spanning all services in a single region B. Cross-AZ dependencies with synchronous RPC for all services C. Service-per-AZ with regional async messaging (SQS/SNS) and retries D. Global Accelerator to a single regional ingress

Correct Answer: C Explanation: Decoupled, async communication with retries and per-AZ isolation reduces cascading failures during partial outages.

620) You need to deliver near-real-time analytics from streaming clickstreams while also archiving raw data. Best pipeline? A. Kinesis Data Streams -> Lambda -> RDS B. Kinesis Firehose -> S3 (raw) + OpenSearch (indexed) C. SNS -> SQS -> DynamoDB D. EMR -> Redshift -> S3

Correct Answer: B Explanation: Firehose can deliver to multiple destinations (S3 and OpenSearch) with optional transformation, suitable for archival and search.

621) Which configuration minimizes ALB costs while serving separate staging and production apps? A. Two ALBs, two target groups B. One ALB, two listeners, separate rules/target groups C. Two NLBs, shared targets D. One ALB per AZ for each environment

Correct Answer: B Explanation: A single ALB with multiple listeners and rules reduces cost while cleanly separating environments.

622) To reduce S3 GET latency for a global audience without changing origin, what’s best? A. S3 Transfer Acceleration B. CloudFront distribution in front of S3 C. Global Accelerator to S3 D. Regional replication of S3 bucket

Correct Answer: B Explanation: CloudFront caches content at edge locations and reduces latency globally. Transfer Acceleration optimizes uploads, not downloads.

623) Your Lambda needs VPC access to RDS without internet egress. What must be configured? A. Internet Gateway on the VPC B. NAT Gateway in a public subnet C. Lambda VPC configuration with appropriate subnets and security groups D. Public IP assignment to Lambda

Correct Answer: C Explanation: Lambda must be configured with VPC subnets/security groups to access private resources like RDS.

624) Which solution offloads TLS termination, WAF, and DDoS mitigation closest to users with minimal app changes? A. ALB with TLS, WAF, Shield Standard B. CloudFront + ACM + AWS WAF + Shield Standard C. NLB with TLS passthrough D. Route 53 latency records only

Correct Answer: B Explanation: CloudFront provides edge TLS, integrates with WAF and Shield Standard, and improves global performance with minimal app changes.

⚙️ Technology-Focused Questions (Batch 3)
625) Which AWS service provides scalable object storage with 11 nines of durability? A. Amazon EBS B. Amazon S3 C. Amazon RDS D. Amazon DynamoDB

Correct Answer: B Explanation: Amazon S3 offers highly durable, scalable object storage designed for virtually unlimited data.

626) Which AWS service provides block-level storage volumes for EC2 instances? A. Amazon S3 B. Amazon EBS C. Amazon Glacier D. Amazon DynamoDB

Correct Answer: B Explanation: EBS provides persistent block storage volumes that can be attached to EC2 instances.

627) Which AWS service provides managed relational databases with automated backups? A. Amazon DynamoDB B. Amazon RDS C. Amazon Aurora D. Amazon Redshift

Correct Answer: B Explanation: RDS automates backups, patching, and scaling for relational databases.

628) Which AWS service provides a serverless relational database compatible with MySQL and PostgreSQL? A. Amazon RDS B. Amazon Aurora Serverless C. Amazon DynamoDB D. Amazon Neptune

Correct Answer: B Explanation: Aurora Serverless automatically adjusts capacity based on workload demand.

629) Which AWS service provides a fully managed NoSQL database? A. Amazon RDS B. Amazon DynamoDB C. Amazon Aurora D. Amazon Neptune

Correct Answer: B Explanation: DynamoDB is a managed NoSQL database offering single-digit millisecond latency.

630) Which AWS service provides in-memory caching for applications? A. Amazon ElastiCache B. Amazon RDS C. Amazon DynamoDB D. Amazon S3

Correct Answer: A Explanation: ElastiCache supports Redis and Memcached for low-latency caching.

631) Which AWS service provides petabyte-scale data warehousing? A. Amazon RDS B. Amazon Redshift C. Amazon DynamoDB D. Amazon Aurora

Correct Answer: B Explanation: Redshift is a managed data warehouse optimized for analytics.

632) Which AWS service provides serverless compute triggered by events? A. Amazon EC2 B. AWS Lambda C. Amazon ECS D. AWS Elastic Beanstalk

Correct Answer: B Explanation: Lambda executes code in response to events, scaling automatically.

633) Which AWS service provides container orchestration with EC2 or Fargate? A. Amazon ECS B. Amazon EKS C. AWS Lambda D. AWS Batch

Correct Answer: A Explanation: ECS runs Docker containers on EC2 or Fargate.

634) Which AWS service provides managed Kubernetes clusters? A. Amazon ECS B. Amazon EKS C. AWS Lambda D. AWS Batch

Correct Answer: B Explanation: EKS runs Kubernetes clusters on AWS.

635) Which AWS service provides batch computing at scale? A. AWS Batch B. AWS Lambda C. Amazon ECS D. Amazon EKS

Correct Answer: A Explanation: AWS Batch schedules and runs batch computing jobs efficiently.

636) Which AWS service provides isolated virtual networks for resources? A. Amazon VPC B. AWS Shield C. AWS WAF D. AWS Config

Correct Answer: A Explanation: VPC allows customers to define isolated network environments.

637) Which AWS service provides DNS-based routing for applications? A. Amazon Route 53 B. AWS Global Accelerator C. Amazon CloudFront D. AWS Shield

Correct Answer: A Explanation: Route 53 is a scalable DNS service with health checks and failover.

638) Which AWS service accelerates global application traffic using AWS backbone infrastructure? A. Amazon Route 53 B. AWS Global Accelerator C. Amazon CloudFront D. AWS Shield

Correct Answer: B Explanation: Global Accelerator routes traffic through AWS’s global network.

639) Which AWS service provides content delivery via edge locations? A. Amazon CloudFront B. AWS Global Accelerator C. Amazon Route 53 D. AWS Shield

Correct Answer: A Explanation: CloudFront caches content at edge locations.

640) Which AWS service provides monitoring and alerting for metrics and logs? A. Amazon CloudWatch B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: CloudWatch collects metrics and logs for monitoring.

641) Which AWS service records API calls for auditing? A. AWS CloudTrail B. AWS Config C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: CloudTrail records API calls for compliance.

642) Which AWS service tracks resource configurations and compliance? A. AWS Config B. AWS CloudTrail C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: Config records resource configurations and evaluates compliance.

643) Which AWS service provides centralized operational management and automation? A. AWS Systems Manager B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: Systems Manager aggregates operational data and enables automation.

644) Which AWS service provides managed workflows for application deployment? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: A Explanation: CodePipeline automates build, test, and deployment workflows.

645) Which AWS service provides source control for code repositories? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: B Explanation: CodeCommit is a managed Git-based source control service.

646) Which AWS service provides build automation for applications? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: C Explanation: CodeBuild compiles source code and runs tests.

647) Which AWS service provides automated application deployment? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: D Explanation: CodeDeploy automates deployments across EC2, Lambda, and on-premises.

648) Which AWS service orchestrates serverless workflows? A. AWS Step Functions B. AWS Lambda C. Amazon ECS D. AWS Batch

Correct Answer: A Explanation: Step Functions orchestrate workflows using state machines.

649) Which AWS service provides managed API endpoints? A. Amazon API Gateway B. AWS Lambda C. Amazon ECS D. AWS Step Functions

Correct Answer: A Explanation: API Gateway creates and manages APIs, integrating with Lambda and backend services.

Technology-Focused Questions (Batch 4)
650) Which AWS service provides durable, scalable storage for static website hosting? A. Amazon EBS B. Amazon S3 C. Amazon RDS D. Amazon DynamoDB

Correct Answer: B Explanation: S3 supports static website hosting with high durability and scalability.

651) Which AWS service provides elastic compute capacity in the cloud? A. Amazon EC2 B. AWS Lambda C. Amazon ECS D. AWS Batch

Correct Answer: A Explanation: EC2 provides resizable compute capacity for running applications.

652) Which AWS service provides serverless compute triggered by events? A. Amazon EC2 B. AWS Lambda C. Amazon ECS D. AWS Elastic Beanstalk

Correct Answer: B Explanation: Lambda runs code without provisioning servers, scaling automatically.

653) Which AWS service provides managed container orchestration? A. Amazon ECS B. Amazon EKS C. AWS Lambda D. AWS Batch

Correct Answer: A Explanation: ECS manages Docker containers on EC2 or Fargate.

654) Which AWS service provides managed Kubernetes clusters? A. Amazon ECS B. Amazon EKS C. AWS Lambda D. AWS Batch

Correct Answer: B Explanation: EKS runs Kubernetes clusters with AWS integrations.

655) Which AWS service provides batch computing at scale? A. AWS Batch B. AWS Lambda C. Amazon ECS D. Amazon EKS

Correct Answer: A Explanation: AWS Batch schedules and runs batch computing jobs efficiently.

656) Which AWS service provides relational database management with automated patching? A. Amazon DynamoDB B. Amazon RDS C. Amazon Aurora D. Amazon Redshift

Correct Answer: B Explanation: RDS automates patching, backups, and scaling for relational databases.

657) Which AWS service provides a serverless relational database? A. Amazon RDS B. Amazon Aurora Serverless C. Amazon DynamoDB D. Amazon Neptune

Correct Answer: B Explanation: Aurora Serverless scales database capacity automatically.

658) Which AWS service provides a fully managed NoSQL database? A. Amazon RDS B. Amazon DynamoDB C. Amazon Aurora D. Amazon Neptune

Correct Answer: B Explanation: DynamoDB is a managed NoSQL database with low-latency performance.

659) Which AWS service provides in-memory caching? A. Amazon ElastiCache B. Amazon RDS C. Amazon DynamoDB D. Amazon S3

Correct Answer: A Explanation: ElastiCache supports Redis and Memcached for caching.

660) Which AWS service provides petabyte-scale data warehousing? A. Amazon RDS B. Amazon Redshift C. Amazon DynamoDB D. Amazon Aurora

Correct Answer: B Explanation: Redshift is a managed data warehouse optimized for analytics.

661) Which AWS service provides managed workflows for application deployment? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: A Explanation: CodePipeline automates build, test, and deployment workflows.

662) Which AWS service provides source control for code repositories? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: B Explanation: CodeCommit is a managed Git-based source control service.

663) Which AWS service provides build automation? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: C Explanation: CodeBuild compiles source code and runs tests.

664) Which AWS service provides automated application deployment? A. AWS CodePipeline B. AWS CodeCommit C. AWS CodeBuild D. AWS CodeDeploy

Correct Answer: D Explanation: CodeDeploy automates deployments across EC2, Lambda, and on-premises.

665) Which AWS service orchestrates serverless workflows? A. AWS Step Functions B. AWS Lambda C. Amazon ECS D. AWS Batch

Correct Answer: A Explanation: Step Functions orchestrate workflows using state machines.

666) Which AWS service provides managed API endpoints? A. Amazon API Gateway B. AWS Lambda C. Amazon ECS D. AWS Step Functions

Correct Answer: A Explanation: API Gateway manages APIs with features like caching and throttling.

667) Which AWS service provides monitoring and alerting for metrics? A. Amazon CloudWatch B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: CloudWatch collects metrics and logs for monitoring.

668) Which AWS service records API calls for auditing? A. AWS CloudTrail B. AWS Config C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: CloudTrail records API calls for compliance.

669) Which AWS service tracks resource configurations? A. AWS Config B. AWS CloudTrail C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: Config records resource configurations and evaluates compliance.

670) Which AWS service provides centralized operational management? A. AWS Systems Manager B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: Systems Manager aggregates operational data and enables automation.

671) Which AWS service provides managed search and analytics? A. Amazon OpenSearch Service B. Amazon CloudWatch C. AWS Config D. AWS Glue

Correct Answer: A Explanation: OpenSearch Service provides search and analytics capabilities.

672) Which AWS service provides managed machine learning model deployment? A. Amazon SageMaker B. AWS Lambda C. Amazon ECS D. AWS Glue

Correct Answer: A Explanation: SageMaker enables building, training, and deploying ML models.

673) Which AWS service provides managed messaging for pub/sub communication? A. Amazon SNS B. Amazon SQS C. Amazon Kinesis D. AWS Step Functions

Correct Answer: A Explanation: SNS provides pub/sub messaging for broadcasting messages.

674) Which AWS service provides managed event bus for application integration? A. Amazon EventBridge B. Amazon SNS C. Amazon SQS D. AWS Step Functions

Correct Answer: A Explanation: EventBridge provides event-driven integration across AWS services and SaaS apps.

⚙️ Technology-Focused Questions (Batch 5)
675) Which AWS service provides durable archival storage with retrieval times ranging from minutes to hours? A. Amazon S3 Standard B. Amazon S3 Glacier C. Amazon EBS D. Amazon DynamoDB

Correct Answer: B Explanation: S3 Glacier is designed for long-term archival storage with configurable retrieval times.

676) Which AWS service provides shared file storage accessible by multiple EC2 instances? A. Amazon EBS B. Amazon S3 C. Amazon EFS D. Amazon Glacier

Correct Answer: C Explanation: EFS is a scalable, elastic file system accessible by multiple EC2 instances concurrently.

677) Which AWS service provides managed graph database capabilities? A. Amazon Aurora B. Amazon Neptune C. Amazon DynamoDB D. Amazon Redshift

Correct Answer: B Explanation: Neptune is a managed graph database supporting Gremlin and SPARQL queries.

678) Which AWS service provides managed ETL for preparing data for analytics? A. AWS Glue B. Amazon EMR C. AWS Data Pipeline D. Amazon Kinesis

Correct Answer: A Explanation: Glue is a serverless ETL service that prepares and transforms data for analytics.

679) Which AWS service provides managed big data frameworks like Hadoop and Spark? A. Amazon EMR B. Amazon Redshift C. AWS Glue D. AWS Data Pipeline

Correct Answer: A Explanation: EMR manages big data frameworks such as Hadoop and Spark for analytics.

680) Which AWS service provides managed search and analytics for log data? A. Amazon OpenSearch Service B. Amazon CloudWatch C. AWS Config D. AWS Glue

Correct Answer: A Explanation: OpenSearch Service enables indexing and searching of log and application data.

681) Which AWS service provides managed machine learning model deployment? A. Amazon SageMaker B. AWS Lambda C. Amazon ECS D. AWS Glue

Correct Answer: A Explanation: SageMaker enables building, training, and deploying machine learning models.

682) Which AWS service provides managed messaging for pub/sub communication? A. Amazon SNS B. Amazon SQS C. Amazon Kinesis D. AWS Step Functions

Correct Answer: A Explanation: SNS provides pub/sub messaging for broadcasting messages to multiple subscribers.

683) Which AWS service provides durable, asynchronous messaging between microservices? A. Amazon SNS B. Amazon SQS C. Amazon Kinesis D. AWS Step Functions

Correct Answer: B Explanation: SQS provides message queuing for decoupling microservices.

684) Which AWS service provides SQL-based real-time analytics on streaming data? A. Amazon Kinesis Data Analytics B. Amazon Redshift C. AWS Glue D. Amazon EMR

Correct Answer: A Explanation: Kinesis Data Analytics enables SQL-based real-time analytics on streaming data.

685) Which AWS service provides managed event bus for application integration? A. Amazon EventBridge B. Amazon SNS C. Amazon SQS D. AWS Step Functions

Correct Answer: A Explanation: EventBridge provides event-driven integration across AWS services and SaaS apps.

686) Which AWS service provides managed API endpoints with caching and throttling? A. Amazon API Gateway B. AWS Lambda C. Amazon ECS D. AWS Step Functions

Correct Answer: A Explanation: API Gateway manages APIs with features like caching, throttling, and authorization.

687) Which AWS service provides distributed tracing for application performance monitoring? A. Amazon CloudWatch B. AWS X-Ray C. AWS Config D. AWS Inspector

Correct Answer: B Explanation: X-Ray provides distributed tracing to monitor application performance and troubleshoot bottlenecks.

688) Which AWS service provides managed desktop virtualization? A. Amazon WorkSpaces B. Amazon AppStream 2.0 C. Amazon Chime D. Amazon WorkDocs

Correct Answer: A Explanation: WorkSpaces delivers managed virtual desktops in the cloud.

689) Which AWS service streams applications securely to end-users? A. Amazon WorkSpaces B. Amazon AppStream 2.0 C. Amazon Chime D. Amazon WorkDocs

Correct Answer: B Explanation: AppStream 2.0 streams applications securely to end-users without local installation.

690) Which AWS service provides secure video conferencing and chat? A. Amazon Chime B. Amazon WorkDocs C. Amazon WorkSpaces D. Amazon AppStream 2.0

Correct Answer: A Explanation: Chime provides secure video conferencing and collaboration tools.

691) Which AWS service provides managed document collaboration with versioning? A. Amazon WorkDocs B. Amazon Chime C. Amazon WorkSpaces D. Amazon AppStream 2.0

Correct Answer: A Explanation: WorkDocs enables secure document collaboration with version control.

692) Which AWS service provides managed workflows for serverless applications? A. AWS Step Functions B. AWS Lambda C. Amazon ECS D. AWS Batch

Correct Answer: A Explanation: Step Functions orchestrate serverless workflows using state machines.

693) Which AWS service provides managed caching for APIs? A. Amazon API Gateway B. AWS Lambda C. Amazon ECS D. AWS Step Functions

Correct Answer: A Explanation: API Gateway supports caching responses to improve performance.

694) Which AWS service provides managed monitoring of application performance? A. Amazon CloudWatch B. AWS X-Ray C. AWS Config D. AWS Inspector

Correct Answer: B Explanation: X-Ray provides distributed tracing to monitor application performance.

695) Which AWS service provides managed ETL pipelines with scheduling? A. AWS Data Pipeline B. AWS Glue C. Amazon EMR D. Amazon Redshift

Correct Answer: A Explanation: Data Pipeline orchestrates ETL workflows with scheduling and dependency management.

696) Which AWS service provides managed big data analytics with SQL queries? A. Amazon Redshift B. Amazon RDS C. Amazon DynamoDB D. Amazon Aurora

Correct Answer: A Explanation: Redshift is a managed data warehouse optimized for SQL-based analytics.

697) Which AWS service provides managed search for application data? A. Amazon OpenSearch Service B. Amazon CloudWatch C. AWS Config D. AWS Glue

Correct Answer: A Explanation: OpenSearch Service provides search and analytics for application data.

698) Which AWS service provides managed machine learning model training and deployment? A. Amazon SageMaker B. AWS Lambda C. Amazon ECS D. AWS Glue

Correct Answer: A Explanation: SageMaker enables building, training, and deploying ML models.

699) Which AWS service provides managed messaging for broadcasting messages to multiple subscribers? A. Amazon SNS B. Amazon SQS C. Amazon Kinesis D. AWS Step Functions

Correct Answer: A Explanation: SNS provides pub/sub messaging for broadcasting messages to multiple subscribers.

⚙️ Technology-Focused Questions (Batch 6)
700) Which AWS service provides dedicated network connections between on-premises and AWS? A. AWS VPN B. AWS Direct Connect C. Amazon VPC Peering D. AWS Transit Gateway

Correct Answer: B Explanation: Direct Connect establishes dedicated, high-bandwidth connections between on-premises and AWS.

701) Which AWS service provides encrypted tunnels over the internet to connect on-premises to AWS? A. AWS VPN B. AWS Direct Connect C. Amazon VPC Peering D. AWS Transit Gateway

Correct Answer: A Explanation: VPN provides secure, encrypted tunnels over the internet to connect on-premises networks to AWS.

702) Which AWS service connects multiple VPCs together across accounts and regions? A. AWS VPN B. AWS Direct Connect C. Amazon VPC Peering D. AWS Transit Gateway

Correct Answer: D Explanation: Transit Gateway connects multiple VPCs and on-premises networks through a central hub.

703) Which AWS service provides point-to-point connectivity between two VPCs? A. AWS VPN B. AWS Direct Connect C. Amazon VPC Peering D. AWS Transit Gateway

Correct Answer: C Explanation: VPC Peering enables direct communication between two VPCs.

704) Which AWS service provides managed DNS routing with health checks? A. Amazon Route 53 B. AWS Global Accelerator C. Amazon CloudFront D. AWS Shield

Correct Answer: A Explanation: Route 53 provides DNS routing, health checks, and failover.

705) Which AWS service accelerates global application traffic using AWS backbone infrastructure? A. Amazon Route 53 B. AWS Global Accelerator C. Amazon CloudFront D. AWS Shield

Correct Answer: B Explanation: Global Accelerator routes traffic through AWS’s global network for improved performance.

706) Which AWS service caches content at edge locations for faster delivery? A. Amazon CloudFront B. AWS Global Accelerator C. Amazon Route 53 D. AWS Shield

Correct Answer: A Explanation: CloudFront caches content at edge locations to reduce latency.

707) Which AWS service provides managed DDoS protection? A. AWS Shield B. AWS WAF C. AWS Config D. AWS Inspector

Correct Answer: A Explanation: Shield provides managed DDoS protection for AWS applications.

708) Which AWS service filters HTTP requests to protect web applications? A. AWS Shield B. AWS WAF C. AWS Config D. AWS Inspector

Correct Answer: B Explanation: WAF filters HTTP requests to block common exploits like SQL injection.

709) Which AWS service provides monitoring and alerting for metrics and logs? A. Amazon CloudWatch B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: CloudWatch collects metrics and logs for monitoring.

710) Which AWS service records API calls for auditing? A. AWS CloudTrail B. AWS Config C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: CloudTrail records API calls for compliance and auditing.

711) Which AWS service tracks resource configurations and compliance? A. AWS Config B. AWS CloudTrail C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: Config records resource configurations and evaluates compliance.

712) Which AWS service provides centralized operational management and automation? A. AWS Systems Manager B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: Systems Manager aggregates operational data and enables automation.

713) Which AWS service provides managed ETL pipelines with scheduling? A. AWS Data Pipeline B. AWS Glue C. Amazon EMR D. Amazon Redshift

Correct Answer: A Explanation: Data Pipeline orchestrates ETL workflows with scheduling and dependency management.

714) Which AWS service provides serverless ETL for preparing data for analytics? A. AWS Glue B. Amazon EMR C. AWS Data Pipeline D. Amazon Kinesis

Correct Answer: A Explanation: Glue prepares and transforms data for analytics in a serverless environment.

715) Which AWS service provides managed big data frameworks like Hadoop and Spark? A. Amazon EMR B. Amazon Redshift C. AWS Glue D. AWS Data Pipeline

Correct Answer: A Explanation: EMR manages big data frameworks such as Hadoop and Spark.

716) Which AWS service provides managed data warehousing with SQL queries? A. Amazon Redshift B. Amazon RDS C. Amazon DynamoDB D. Amazon Aurora

Correct Answer: A Explanation: Redshift is a managed data warehouse optimized for SQL-based analytics.

717) Which AWS service provides managed search and analytics for application data? A. Amazon OpenSearch Service B. Amazon CloudWatch C. AWS Config D. AWS Glue

Correct Answer: A Explanation: OpenSearch Service provides search and analytics for application data.

718) Which AWS service provides managed machine learning model training and deployment? A. Amazon SageMaker B. AWS Lambda C. Amazon ECS D. AWS Glue

Correct Answer: A Explanation: SageMaker enables building, training, and deploying ML models.

719) Which AWS service provides managed messaging for pub/sub communication? A. Amazon SNS B. Amazon SQS C. Amazon Kinesis D. AWS Step Functions

Correct Answer: A Explanation: SNS provides pub/sub messaging for broadcasting messages.

720) Which AWS service provides durable, asynchronous messaging between microservices? A. Amazon SNS B. Amazon SQS C. Amazon Kinesis D. AWS Step Functions

Correct Answer: B Explanation: SQS provides message queuing for decoupling microservices.

721) Which AWS service provides SQL-based real-time analytics on streaming data? A. Amazon Kinesis Data Analytics B. Amazon Redshift C. AWS Glue D. Amazon EMR

Correct Answer: A Explanation: Kinesis Data Analytics enables SQL-based real-time analytics on streaming data.

722) Which AWS service provides managed event bus for application integration? A. Amazon EventBridge B. Amazon SNS C. Amazon SQS D. AWS Step Functions

Correct Answer: A Explanation: EventBridge provides event-driven integration across AWS services and SaaS apps.

723) Which AWS service provides managed API endpoints with caching and throttling? A. Amazon API Gateway B. AWS Lambda C. Amazon ECS D. AWS Step Functions

Correct Answer: A Explanation: API Gateway manages APIs with features like caching and throttling.

724) Which AWS service provides distributed tracing for application performance monitoring? A. Amazon CloudWatch B. AWS X-Ray C. AWS Config D. AWS Inspector

Correct Answer: B Explanation: X-Ray provides distributed tracing to monitor application performance and troubleshoot bottlenecks.

⚙️ Technology-Focused Questions (Batch 7)
725) Which AWS service provides long-term archival storage with the lowest cost but hours-long retrieval? A. Amazon S3 Standard B. Amazon S3 Glacier Deep Archive C. Amazon EBS D. Amazon DynamoDB

Correct Answer: B Explanation: Glacier Deep Archive is the lowest-cost storage tier, designed for data accessed rarely, with retrieval times up to 12 hours.

726) Which AWS service provides shared file storage with POSIX compliance? A. Amazon EBS B. Amazon S3 C. Amazon EFS D. Amazon Glacier

Correct Answer: C Explanation: EFS provides scalable, elastic file storage accessible by multiple EC2 instances with POSIX compliance.

727) Which AWS service provides managed relational databases with high availability across multiple AZs? A. Amazon DynamoDB B. Amazon RDS Multi-AZ C. Amazon Aurora Global Database D. Amazon Redshift

Correct Answer: B Explanation: RDS Multi-AZ deployments provide automatic failover for high availability.

728) Which AWS service provides globally distributed relational databases with low-latency reads? A. Amazon RDS Multi-AZ B. Amazon Aurora Global Database C. Amazon DynamoDB Global Tables D. Amazon Redshift

Correct Answer: B Explanation: Aurora Global Database replicates across regions for low-latency global reads.

729) Which AWS service provides globally distributed NoSQL databases with multi-region replication? A. Amazon RDS Multi-AZ B. Amazon Aurora Global Database C. Amazon DynamoDB Global Tables D. Amazon Redshift

Correct Answer: C Explanation: DynamoDB Global Tables replicate data across multiple regions for global availability.

730) Which AWS service provides managed caching for DynamoDB queries? A. Amazon ElastiCache B. Amazon DAX C. Amazon RDS Read Replicas D. Amazon CloudFront

Correct Answer: B Explanation: DynamoDB Accelerator (DAX) provides in-memory caching for DynamoDB queries.

731) Which AWS service provides managed in-memory caching supporting Redis and Memcached? A. Amazon ElastiCache B. Amazon DAX C. Amazon RDS Read Replicas D. Amazon CloudFront

Correct Answer: A Explanation: ElastiCache supports Redis and Memcached for caching workloads.

732) Which AWS service provides managed data warehousing with concurrency scaling? A. Amazon RDS B. Amazon Redshift C. Amazon DynamoDB D. Amazon Aurora

Correct Answer: B Explanation: Redshift supports concurrency scaling to handle spikes in query workloads.

733) Which AWS service provides serverless compute with provisioned concurrency to reduce cold starts? A. Amazon EC2 B. AWS Lambda C. Amazon ECS D. AWS Elastic Beanstalk

Correct Answer: B Explanation: Lambda supports provisioned concurrency to keep execution environments warm.

734) Which AWS service provides container orchestration with serverless compute? A. Amazon ECS on EC2 B. Amazon ECS on Fargate C. Amazon EKS on EC2 D. AWS Batch

Correct Answer: B Explanation: ECS on Fargate runs containers serverlessly without managing EC2 instances.

735) Which AWS service provides managed Kubernetes clusters with integration to IAM? A. Amazon ECS B. Amazon EKS C. AWS Lambda D. AWS Batch

Correct Answer: B Explanation: EKS integrates Kubernetes with AWS IAM for authentication and authorization.

736) Which AWS service provides batch computing jobs scheduled across EC2 and Spot Instances? A. AWS Batch B. AWS Lambda C. Amazon ECS D. Amazon EKS

Correct Answer: A Explanation: AWS Batch schedules and runs batch computing jobs efficiently.

737) Which AWS service provides managed DNS routing with latency-based policies? A. Amazon Route 53 B. AWS Global Accelerator C. Amazon CloudFront D. AWS Shield

Correct Answer: A Explanation: Route 53 supports latency-based routing to direct traffic to the closest region.

738) Which AWS service provides global traffic acceleration using Anycast IP addresses? A. Amazon Route 53 B. AWS Global Accelerator C. Amazon CloudFront D. AWS Shield

Correct Answer: B Explanation: Global Accelerator uses Anycast IPs to route traffic through AWS’s backbone network.

739) Which AWS service provides content delivery with edge caching and integration with WAF? A. Amazon CloudFront B. AWS Global Accelerator C. Amazon Route 53 D. AWS Shield

Correct Answer: A Explanation: CloudFront caches content at edge locations and integrates with AWS WAF for security.

740) Which AWS service provides managed DDoS protection included at no extra cost? A. AWS Shield Standard B. AWS WAF C. AWS Config D. AWS Inspector

Correct Answer: A Explanation: Shield Standard provides automatic DDoS protection for AWS applications.

741) Which AWS service provides managed web application firewall rules? A. AWS Shield B. AWS WAF C. AWS Config D. AWS Inspector

Correct Answer: B Explanation: WAF filters HTTP requests to block common exploits.

742) Which AWS service provides monitoring and alerting for metrics and logs? A. Amazon CloudWatch B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: CloudWatch collects metrics and logs for monitoring.

743) Which AWS service records API calls for auditing and compliance? A. AWS CloudTrail B. AWS Config C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: CloudTrail records API calls for compliance and auditing.

744) Which AWS service tracks resource configurations and evaluates compliance? A. AWS Config B. AWS CloudTrail C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: Config records resource configurations and evaluates compliance.

745) Which AWS service provides centralized operational management and automation? A. AWS Systems Manager B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: Systems Manager aggregates operational data and enables automation.

746) Which AWS service provides managed ETL pipelines with scheduling and dependency management? A. AWS Data Pipeline B. AWS Glue C. Amazon EMR D. Amazon Redshift

Correct Answer: A Explanation: Data Pipeline orchestrates ETL workflows with scheduling and dependencies.

747) Which AWS service provides serverless ETL for preparing and transforming data? A. AWS Glue B. Amazon EMR C. AWS Data Pipeline D. Amazon Kinesis

Correct Answer: A Explanation: Glue prepares and transforms data for analytics in a serverless environment.

748) Which AWS service provides managed big data frameworks like Hadoop and Spark? A. Amazon EMR B. Amazon Redshift C. AWS Glue D. AWS Data Pipeline

Correct Answer: A Explanation: EMR manages big data frameworks such as Hadoop and Spark.

749) Which AWS service provides managed data warehousing optimized for SQL-based analytics? A. Amazon Redshift B. Amazon RDS C. Amazon DynamoDB D. Amazon Aurora

Correct Answer: A Explanation: Redshift is a managed data warehouse optimized for SQL-based analytics.

Security + Cost Management (Additional Questions)
750) Which AWS service allows you to set custom cost and usage thresholds with alerts? A. AWS Cost Explorer B. AWS Budgets C. AWS Organizations D. AWS Trusted Advisor

Correct Answer: B Explanation: AWS Budgets lets you define spending limits and receive alerts when usage or costs exceed thresholds.

751) Which AWS service provides visualizations of historical and forecasted spending? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: B Explanation: Cost Explorer enables visualization of usage and costs over time, supporting trend analysis.

752) Which AWS feature allows consolidated billing across multiple accounts? A. AWS Budgets B. AWS Cost Explorer C. AWS Organizations D. AWS Trusted Advisor

Correct Answer: C Explanation: AWS Organizations supports consolidated billing, combining charges across accounts.

753) Which AWS service provides detailed reports for deeper analysis of usage and costs? A. AWS Budgets B. AWS Cost Explorer C. AWS Cost and Usage Reports (CUR) D. AWS Organizations

Correct Answer: C Explanation: CUR provides detailed reports for granular analysis of AWS usage and costs.

754) Which AWS service provides recommendations for cost optimization? A. AWS Trusted Advisor B. AWS Config C. AWS Inspector D. AWS Artifact

Correct Answer: A Explanation: Trusted Advisor analyzes accounts and provides best practice recommendations, including cost optimization.

755) Which AWS service provides centralized management of multiple accounts? A. AWS Budgets B. AWS Cost Explorer C. AWS Organizations D. AWS Config

Correct Answer: C Explanation: Organizations enables centralized management of accounts, policies, and billing.

756) Which AWS service provides alerts when spending exceeds a defined threshold? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: A Explanation: Budgets sends alerts when spending or usage exceeds defined thresholds.

757) Which AWS service provides compliance auditing by tracking resource changes? A. AWS Config B. AWS CloudTrail C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: Config records resource configurations and changes for compliance auditing.

758) Which AWS service records API calls for auditing and compliance? A. AWS CloudTrail B. AWS Config C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: CloudTrail records API calls for compliance and auditing.

759) Which AWS service provides centralized operational management and automation? A. AWS Systems Manager B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: Systems Manager aggregates operational data and enables automation.

760) Which AWS service provides managed encryption key management? A. AWS KMS B. AWS CloudHSM C. AWS Secrets Manager D. AWS Certificate Manager

Correct Answer: A Explanation: KMS manages encryption keys for securing data at rest and in transit.

761) Which AWS service provides hardware security modules for managing encryption keys? A. AWS KMS B. AWS CloudHSM C. AWS Secrets Manager D. AWS Certificate Manager

Correct Answer: B Explanation: CloudHSM offers dedicated hardware modules for secure key storage and management.

762) Which AWS service manages SSL/TLS certificates? A. AWS KMS B. AWS CloudHSM C. AWS Certificate Manager D. AWS Secrets Manager

Correct Answer: C Explanation: ACM simplifies certificate provisioning and renewal for secure communication.

763) Which AWS service securely stores and rotates secrets such as API keys? A. AWS Secrets Manager B. AWS KMS C. AWS CloudHSM D. AWS Config

Correct Answer: A Explanation: Secrets Manager securely stores and rotates credentials, reducing exposure risk.

764) Which AWS service provides compliance documentation and reports? A. AWS Artifact B. AWS Security Hub C. AWS Config D. AWS Inspector

Correct Answer: A Explanation: Artifact provides compliance reports and documentation for regulatory requirements.

765) Which AWS service provides centralized threat detection and prioritization? A. AWS Security Hub B. Amazon GuardDuty C. AWS Inspector D. AWS Config

Correct Answer: A Explanation: Security Hub aggregates findings from multiple services and prioritizes them.

766) Which AWS service continuously monitors for malicious activity? A. Amazon GuardDuty B. AWS Security Hub C. AWS Inspector D. AWS Config

Correct Answer: A Explanation: GuardDuty analyzes logs and network traffic to detect threats.

767) Which AWS service provides automated vulnerability assessments of EC2 instances? A. AWS Inspector B. AWS Config C. AWS Trusted Advisor D. AWS Artifact

Correct Answer: A Explanation: Inspector runs automated security assessments to identify vulnerabilities in EC2 workloads.

768) Which AWS service provides recommendations for security best practices? A. AWS Trusted Advisor B. AWS Config C. AWS Inspector D. AWS Artifact

Correct Answer: A Explanation: Trusted Advisor provides automated checks for security, performance, and cost optimization.


🔐 Security + Cost Management (Batch 2)
769) Which AWS account should never be used for daily tasks? A. IAM user account B. IAM role account C. Root user account D. Federated identity account

Correct Answer: C Explanation: The root user has unrestricted access and should only be used for initial setup or critical tasks.

770) Which IAM feature allows temporary access to AWS resources? A. IAM groups B. IAM policies C. IAM roles D. IAM users

Correct Answer: C Explanation: IAM roles provide temporary credentials for users or services to access AWS resources.

771) Which IAM feature allows grouping users for easier permission management? A. IAM roles B. IAM groups C. IAM policies D. IAM federation

Correct Answer: B Explanation: IAM groups simplify permission management by applying policies to multiple users at once.

772) Which IAM feature defines what actions are allowed or denied? A. IAM roles B. IAM groups C. IAM policies D. IAM federation

Correct Answer: C Explanation: IAM policies define permissions for users, groups, or roles.

773) Which AWS service provides centralized management of multiple accounts with consolidated billing? A. AWS Budgets B. AWS Cost Explorer C. AWS Organizations D. AWS Config

Correct Answer: C Explanation: AWS Organizations enables centralized account management and consolidated billing.

774) Which AWS service provides alerts when spending exceeds a defined threshold? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: A Explanation: Budgets sends alerts when spending or usage exceeds defined thresholds.

775) Which AWS service provides visualizations of historical and forecasted spending? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: B Explanation: Cost Explorer enables visualization of usage and costs over time.

776) Which AWS service provides detailed reports for deeper analysis of usage and costs? A. AWS Budgets B. AWS Cost Explorer C. AWS Cost and Usage Reports (CUR) D. AWS Organizations

Correct Answer: C Explanation: CUR provides detailed reports for granular analysis of AWS usage and costs.

777) Which AWS service provides recommendations for cost optimization? A. AWS Trusted Advisor B. AWS Config C. AWS Inspector D. AWS Artifact

Correct Answer: A Explanation: Trusted Advisor analyzes accounts and provides best practice recommendations, including cost optimization.

778) Which AWS service provides compliance documentation and reports? A. AWS Artifact B. AWS Security Hub C. AWS Config D. AWS Inspector

Correct Answer: A Explanation: Artifact provides compliance reports and documentation for regulatory requirements.

779) Which AWS service provides centralized threat detection and prioritization? A. AWS Security Hub B. Amazon GuardDuty C. AWS Inspector D. AWS Config

Correct Answer: A Explanation: Security Hub aggregates findings from multiple services and prioritizes them.

780) Which AWS service continuously monitors for malicious activity? A. Amazon GuardDuty B. AWS Security Hub C. AWS Inspector D. AWS Config

Correct Answer: A Explanation: GuardDuty analyzes logs and network traffic to detect threats.

781) Which AWS service provides automated vulnerability assessments of EC2 instances? A. AWS Inspector B. AWS Config C. AWS Trusted Advisor D. AWS Artifact

Correct Answer: A Explanation: Inspector runs automated security assessments to identify vulnerabilities in EC2 workloads.

782) Which AWS service provides managed encryption key management? A. AWS KMS B. AWS CloudHSM C. AWS Secrets Manager D. AWS Certificate Manager

Correct Answer: A Explanation: KMS manages encryption keys for securing data at rest and in transit.

783) Which AWS service provides hardware security modules for managing encryption keys? A. AWS KMS B. AWS CloudHSM C. AWS Secrets Manager D. AWS Certificate Manager

Correct Answer: B Explanation: CloudHSM offers dedicated hardware modules for secure key storage and management.

784) Which AWS service manages SSL/TLS certificates? A. AWS KMS B. AWS CloudHSM C. AWS Certificate Manager D. AWS Secrets Manager

Correct Answer: C Explanation: ACM simplifies certificate provisioning and renewal for secure communication.

785) Which AWS service securely stores and rotates secrets such as API keys? A. AWS Secrets Manager B. AWS KMS C. AWS CloudHSM D. AWS Config

Correct Answer: A Explanation: Secrets Manager securely stores and rotates credentials, reducing exposure risk.

786) Which AWS service provides compliance auditing by tracking resource changes? A. AWS Config B. AWS CloudTrail C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: Config records resource configurations and changes for compliance auditing.

787) Which AWS service records API calls for auditing and compliance? A. AWS CloudTrail B. AWS Config C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: CloudTrail records API calls for compliance and auditing.

788) Which AWS service provides centralized operational management and automation? A. AWS Systems Manager B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: Systems Manager aggregates operational data and enables automation.


🔐 Security + Cost Management (Batch 3)
789) Which IAM feature allows federated users to access AWS resources without creating IAM accounts? A. IAM roles with trust policies B. IAM groups C. IAM policies D. IAM users

Correct Answer: A Explanation: IAM roles with trust policies enable federated identities (e.g., via SAML or OIDC) to access AWS resources.

790) Which IAM best practice reduces the blast radius of compromised credentials? A. Use long-lived access keys B. Apply least privilege C. Share root credentials with admins D. Disable MFA

Correct Answer: B Explanation: Least privilege ensures users only have the permissions required for their tasks, minimizing risk.

791) Which IAM feature enforces strong password requirements across an AWS account? A. IAM roles B. IAM policies C. Account password policy D. IAM groups

Correct Answer: C Explanation: Account password policies enforce complexity, length, and rotation requirements for IAM users.

792) Which AWS service provides alerts when usage exceeds defined thresholds? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: A Explanation: Budgets sends alerts when usage or costs exceed thresholds.

793) Which AWS service provides consolidated billing across multiple accounts? A. AWS Budgets B. AWS Cost Explorer C. AWS Organizations D. AWS Trusted Advisor

Correct Answer: C Explanation: Organizations supports consolidated billing and centralized account management.

794) Which AWS service provides compliance documentation such as SOC and ISO reports? A. AWS Artifact B. AWS Security Hub C. AWS Config D. AWS Inspector

Correct Answer: A Explanation: Artifact provides compliance documentation and reports for regulatory requirements.

795) Which AWS service provides centralized threat detection and prioritization? A. AWS Security Hub B. Amazon GuardDuty C. AWS Inspector D. AWS Config

Correct Answer: A Explanation: Security Hub aggregates findings from multiple services and prioritizes them.

796) Which AWS service continuously monitors for malicious activity and unauthorized behavior? A. Amazon GuardDuty B. AWS Security Hub C. AWS Inspector D. AWS Config

Correct Answer: A Explanation: GuardDuty analyzes logs and network traffic to detect threats.

797) Which AWS service provides automated vulnerability assessments of EC2 instances? A. AWS Inspector B. AWS Config C. AWS Trusted Advisor D. AWS Artifact

Correct Answer: A Explanation: Inspector runs automated security assessments to identify vulnerabilities in EC2 workloads.

798) Which AWS service provides recommendations for cost optimization, security, and performance? A. AWS Trusted Advisor B. AWS Config C. AWS Inspector D. AWS Artifact

Correct Answer: A Explanation: Trusted Advisor provides automated checks for best practices across cost, security, and performance.

799) Which AWS service provides managed encryption key management? A. AWS KMS B. AWS CloudHSM C. AWS Secrets Manager D. AWS Certificate Manager

Correct Answer: A Explanation: KMS manages encryption keys for securing data at rest and in transit.

800) Which AWS service provides hardware security modules for managing encryption keys? A. AWS KMS B. AWS CloudHSM C. AWS Secrets Manager D. AWS Certificate Manager

Correct Answer: B Explanation: CloudHSM offers dedicated hardware modules for secure key storage and management.

801) Which AWS service manages SSL/TLS certificates for secure communication? A. AWS KMS B. AWS CloudHSM C. AWS Certificate Manager D. AWS Secrets Manager

Correct Answer: C Explanation: ACM simplifies certificate provisioning and renewal for secure communication.

802) Which AWS service securely stores and rotates secrets such as API keys? A. AWS Secrets Manager B. AWS KMS C. AWS CloudHSM D. AWS Config

Correct Answer: A Explanation: Secrets Manager securely stores and rotates credentials, reducing exposure risk.

803) Which AWS service provides compliance auditing by tracking resource changes? A. AWS Config B. AWS CloudTrail C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: Config records resource configurations and changes for compliance auditing.

804) Which AWS service records API calls for auditing and compliance? A. AWS CloudTrail B. AWS Config C. AWS Security Hub D. AWS Inspector

Correct Answer: A Explanation: CloudTrail records API calls for compliance and auditing.

805) Which AWS service provides centralized operational management and automation? A. AWS Systems Manager B. AWS Config C. AWS CloudTrail D. AWS Inspector

Correct Answer: A Explanation: Systems Manager aggregates operational data and enables automation.

806) Which AWS service provides detailed reports for deeper analysis of usage and costs? A. AWS Budgets B. AWS Cost Explorer C. AWS Cost and Usage Reports (CUR) D. AWS Organizations

Correct Answer: C Explanation: CUR provides detailed reports for granular analysis of AWS usage and costs.

807) Which AWS service provides visualizations of historical and forecasted spending? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: B Explanation: Cost Explorer enables visualization of usage and costs over time.

808) Which AWS service provides alerts when spending exceeds a defined threshold? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: A Explanation: Budgets sends alerts when spending or usage exceeds defined thresholds.

🔹 Next Step: Cloud Concepts (Batch 1 of 20 Questions)
809) Which AWS infrastructure component provides geographic separation of resources? A. Availability Zones B. Regions C. Edge Locations D. Data Centers

Correct Answer: B Explanation: Regions are geographically distinct locations, each containing multiple Availability Zones.

810) Which AWS infrastructure component provides redundancy within a Region? A. Availability Zones B. Regions C. Edge Locations D. Data Centers

Correct Answer: A Explanation: Availability Zones are isolated locations within a Region, designed for high availability and fault tolerance.

811) Which AWS infrastructure component caches content closer to end-users? A. Availability Zones B. Regions C. Edge Locations D. Data Centers

Correct Answer: C Explanation: Edge Locations are part of CloudFront’s CDN, reducing latency by caching content near users.

812) Which AWS feature allows customers to scale resources up or down automatically? A. Elastic Load Balancing B. Auto Scaling C. AWS Config D. AWS CloudTrail

Correct Answer: B Explanation: Auto Scaling adjusts compute capacity dynamically to meet demand.

813) Which AWS benefit refers to paying only for the resources you consume? A. Scalability B. Pay-as-you-go pricing C. Fault tolerance D. High availability

Correct Answer: B Explanation: AWS uses a consumption-based pricing model, eliminating upfront costs.

814) Which AWS architectural principle ensures workloads remain operational during component failures? A. Scalability B. Fault tolerance C. Elasticity D. Modularity

Correct Answer: B Explanation: Fault tolerance ensures workloads continue functioning even when components fail.

815) Which AWS architectural principle reduces dependencies between system components? A. Modularity B. Decoupling C. Automation D. Elasticity

Correct Answer: B Explanation: Decoupling reduces dependencies, improving flexibility and fault tolerance.

816) Which AWS architectural principle emphasizes building systems from independent components? A. Modularity B. Decoupling C. Automation D. Elasticity

Correct Answer: A Explanation: Modularity enables independent development, testing, and scaling of system components.

817) Which AWS architectural principle emphasizes streamlining processes to minimize manual intervention? A. Modularity B. Decoupling C. Automation D. Elasticity

Correct Answer: C Explanation: Automation reduces human error and increases efficiency.

818) Which AWS benefit allows customers to deploy applications globally with low latency? A. Scalability B. Global Reach C. Fault tolerance D. Elasticity

Correct Answer: B Explanation: AWS’s global infrastructure enables low-latency access worldwide.

819) Which AWS benefit allows customers to adjust resources based on workload demand? A. Scalability and Elasticity B. Fault tolerance C. Modularity D. Automation

Correct Answer: A Explanation: Scalability and elasticity allow resources to expand or contract based on demand.

820) Which AWS benefit allows customers to experiment quickly with new ideas? A. Agility and Speed B. Fault tolerance C. Modularity D. Automation

Correct Answer: A Explanation: AWS enables rapid experimentation and faster time to market.

821) Which AWS benefit reduces operational overhead by providing managed services? A. Fault tolerance B. Managed Services C. Modularity D. Automation

Correct Answer: B Explanation: Managed services reduce the need to manage infrastructure directly.

822) Which AWS benefit ensures workloads remain operational across multiple AZs? A. High Availability B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: High availability ensures workloads remain operational across multiple AZs.

823) Which AWS benefit ensures workloads continue functioning despite failures? A. High Availability B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: B Explanation: Fault tolerance ensures workloads continue functioning despite hardware or software failures.

824) Which AWS benefit optimizes resource use to meet performance goals? A. Performance Efficiency B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Performance efficiency ensures workloads meet performance goals with optimized resource use.

825) Which AWS benefit ensures systems are easy to manage, monitor, and maintain? A. Operational Excellence B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Operational excellence ensures systems are easy to manage and maintain.

826) Which AWS benefit ensures data is protected from unauthorized access? A. Security B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Security ensures data and resources are protected from unauthorized access.

827) Which AWS benefit ensures costs are managed efficiently? A. Cost Optimization B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Cost optimization ensures resources are used efficiently to reduce costs.

828) Which AWS benefit ensures workloads can scale globally in minutes? A. Performance Efficiency B. Global Reach C. Scalability D. Elasticity

Correct Answer: B Explanation: Global reach allows workloads to scale globally in minutes.

AWS Cloud Adoption Framework (CAF) (20 Questions)
829) Which CAF perspective focuses on aligning IT strategy with business outcomes? A. People B. Governance C. Business D. Operations

Correct Answer: C Explanation: The Business perspective ensures IT initiatives deliver measurable business value.

830) Which CAF perspective emphasizes organizational change management and training? A. People B. Security C. Platform D. Governance

Correct Answer: A Explanation: The People perspective addresses culture, skills, and training for successful cloud adoption.

831) Which CAF perspective focuses on risk management and compliance? A. Business B. Governance C. Security D. Operations

Correct Answer: B Explanation: Governance ensures compliance, risk management, and accountability in cloud adoption.

832) Which CAF perspective emphasizes building secure workloads? A. Business B. Governance C. Security D. Operations

Correct Answer: C Explanation: The Security perspective ensures workloads are secure and compliant.

833) Which CAF perspective emphasizes operational excellence and monitoring? A. Business B. Governance C. Security D. Operations

Correct Answer: D Explanation: Operations focuses on monitoring, incident management, and continuous improvement.

834) Which CAF perspective emphasizes infrastructure and platform design? A. Business B. Governance C. Platform D. Operations

Correct Answer: C Explanation: The Platform perspective focuses on designing and building cloud infrastructure.

835) Which CAF perspective emphasizes workforce readiness? A. People B. Governance C. Security D. Operations

Correct Answer: A Explanation: The People perspective ensures workforce readiness and training.

836) Which CAF perspective emphasizes financial management and accountability? A. Business B. Governance C. Security D. Operations

Correct Answer: B Explanation: Governance ensures financial accountability and compliance.

837) Which CAF perspective emphasizes aligning IT with business KPIs? A. Business B. Governance C. Security D. Operations

Correct Answer: A Explanation: Business perspective aligns IT strategy with business KPIs.

838) Which CAF perspective emphasizes proactive security measures? A. Business B. Governance C. Security D. Operations

Correct Answer: C Explanation: Security perspective emphasizes proactive measures to protect workloads.

839) Which CAF perspective emphasizes continuous improvement of operations? A. Business B. Governance C. Security D. Operations

Correct Answer: D Explanation: Operations perspective emphasizes continuous improvement and monitoring.

840) Which CAF perspective emphasizes platform scalability? A. Business B. Governance C. Platform D. Operations

Correct Answer: C Explanation: Platform perspective emphasizes scalable infrastructure design.

841) Which CAF perspective emphasizes training and culture change? A. People B. Governance C. Security D. Operations

Correct Answer: A Explanation: People perspective emphasizes training and cultural change.

842) Which CAF perspective emphasizes compliance with regulations? A. Business B. Governance C. Security D. Operations

Correct Answer: B Explanation: Governance ensures compliance with regulations.

843) Which CAF perspective emphasizes secure workload design? A. Business B. Governance C. Security D. Operations

Correct Answer: C Explanation: Security perspective emphasizes secure workload design.

844) Which CAF perspective emphasizes monitoring and incident response? A. Business B. Governance C. Security D. Operations

Correct Answer: D Explanation: Operations perspective emphasizes monitoring and incident response.

845) Which CAF perspective emphasizes infrastructure design principles? A. Business B. Governance C. Platform D. Operations

Correct Answer: C Explanation: Platform perspective emphasizes infrastructure design principles.

846) Which CAF perspective emphasizes workforce enablement? A. People B. Governance C. Security D. Operations

Correct Answer: A Explanation: People perspective emphasizes workforce enablement.

847) Which CAF perspective emphasizes financial accountability? A. Business B. Governance C. Security D. Operations

Correct Answer: B Explanation: Governance perspective emphasizes financial accountability.

AWS Well-Architected Framework (20 Questions)
848) Which pillar emphasizes designing systems to recover automatically from failure? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: B Explanation: Reliability ensures workloads can withstand and recover from failures.

849) Which pillar emphasizes optimizing resources for performance goals? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: C Explanation: Performance Efficiency ensures workloads meet performance goals with optimized resources.

850) Which pillar emphasizes protecting data and systems? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: A Explanation: Security ensures workloads are protected from unauthorized access.

851) Which pillar emphasizes minimizing costs while meeting business goals? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: D Explanation: Cost Optimization ensures resources are used efficiently to reduce costs.

852) Which pillar emphasizes operational excellence? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: D Explanation: Operational Excellence ensures workloads are easy to manage and maintain.

853) Which design principle emphasizes automating changes? A. Operational Excellence B. Security C. Reliability D. Performance Efficiency

Correct Answer: A Explanation: Operational Excellence emphasizes automation to reduce manual intervention.

854) Which design principle emphasizes testing recovery procedures? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: B Explanation: Reliability emphasizes testing recovery procedures to ensure resilience.

855) Which design principle emphasizes using managed services? A. Operational Excellence B. Security C. Reliability D. Performance Efficiency

Correct Answer: D Explanation: Performance Efficiency emphasizes using managed services to reduce operational overhead.

856) Which design principle emphasizes protecting data at rest and in transit? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: A Explanation: Security emphasizes protecting data at rest and in transit.

857) Which design principle emphasizes measuring overall system health? A. Operational Excellence B. Security C. Reliability D. Performance Efficiency

Correct Answer: A Explanation: Operational Excellence emphasizes monitoring and measuring system health.

858) Which design principle emphasizes designing workloads for failure? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: B Explanation: Reliability emphasizes designing workloads to withstand failures.

859) Which design principle emphasizes democratizing advanced technologies? A. Operational Excellence B. Security C. Reliability D. Performance Efficiency

Correct Answer: D Explanation: Performance Efficiency emphasizes democratizing advanced technologies.

860) Which design principle emphasizes optimizing costs? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: D Explanation: Cost Optimization emphasizes efficient resource use to reduce costs.

861) Which design principle emphasizes enabling traceability? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: A Explanation: Security emphasizes enabling traceability through logging and monitoring.

862) Which design principle emphasizes anticipating failure? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: B Explanation: Reliability emphasizes anticipating and planning for failure.

863) Which design principle emphasizes experimenting often? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: D Explanation: Operational Excellence emphasizes experimentation and continuous improvement.

864) Which design principle emphasizes using elasticity to meet demand? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: C Explanation: Performance Efficiency emphasizes elasticity to meet demand.

865) Which design principle emphasizes stopping spending on unused resources? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: D Explanation: Cost Optimization emphasizes eliminating unused resources.

866) Which design principle emphasizes securing the workload at all layers? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: A Explanation: Security emphasizes defense in depth across all layers.


AWS Well-Architected Framework (20 Questions, 868–887)
868) Which pillar emphasizes designing workloads to withstand component failures? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: B Explanation: Reliability ensures workloads can continue functioning even when components fail.

869) Which pillar emphasizes reducing costs while meeting business requirements? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: D Explanation: Cost Optimization ensures resources are used efficiently to minimize costs.

870) Which pillar emphasizes protecting workloads from unauthorized access? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: A Explanation: Security ensures workloads are protected from unauthorized access and threats.

871) Which pillar emphasizes continuous improvement of operations? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: D Explanation: Operational Excellence emphasizes continuous improvement and efficient operations.

872) Which design principle emphasizes automating security best practices? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: A Explanation: Security emphasizes automating best practices to reduce human error.

873) Which design principle emphasizes monitoring workloads to detect anomalies? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: B Explanation: Reliability emphasizes monitoring workloads to detect and respond to failures.

874) Which design principle emphasizes using elasticity to meet demand? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: C Explanation: Performance Efficiency emphasizes elasticity to meet workload demand.

875) Which design principle emphasizes eliminating unused resources? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: D Explanation: Cost Optimization emphasizes stopping spending on unused resources.

876) Which design principle emphasizes evolving procedures frequently? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: D Explanation: Operational Excellence emphasizes evolving procedures to improve efficiency.

877) Which design principle emphasizes enabling traceability through logging? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: A Explanation: Security emphasizes enabling traceability through logging and monitoring.

878) Which design principle emphasizes anticipating failure? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: B Explanation: Reliability emphasizes anticipating and planning for failure.

879) Which design principle emphasizes experimenting often? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: D Explanation: Operational Excellence emphasizes experimentation and continuous improvement.

880) Which design principle emphasizes democratizing advanced technologies? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: C Explanation: Performance Efficiency emphasizes democratizing advanced technologies.

881) Which design principle emphasizes protecting data at rest and in transit? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: A Explanation: Security emphasizes protecting data at rest and in transit.

882) Which design principle emphasizes testing recovery procedures? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: B Explanation: Reliability emphasizes testing recovery procedures to ensure resilience.

883) Which design principle emphasizes using managed services to reduce overhead? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: C Explanation: Performance Efficiency emphasizes using managed services to reduce operational overhead.

884) Which design principle emphasizes automating operational changes? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: D Explanation: Operational Excellence emphasizes automation to reduce manual intervention.

885) Which design principle emphasizes optimizing costs continuously? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: D Explanation: Cost Optimization emphasizes continuous cost optimization.

886) Which design principle emphasizes defense in depth? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: A Explanation: Security emphasizes defense in depth across all layers of the workload.

887) Which design principle emphasizes monitoring overall system health? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: D Explanation: Operational Excellence emphasizes monitoring and measuring system health.


AWS Support Plans (20 Questions, 888–907)
888) Which AWS Support Plan is included at no additional cost? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: A Explanation: The Basic Support Plan is included at no additional cost.

889) Which AWS Support Plan provides 24/7 access to customer service for account and billing questions? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: A Explanation: Basic Support provides 24/7 access to customer service for account and billing.

890) Which AWS Support Plan provides guidance for non-production workloads? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: B Explanation: Developer Support is designed for non-production workloads.

891) Which AWS Support Plan provides 24/7 access to Cloud Support Engineers via email? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: B Explanation: Developer Support provides access to Cloud Support Engineers via email during business hours.

892) Which AWS Support Plan provides 24/7 access to Cloud Support Engineers via phone, chat, and email? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: C Explanation: Business Support provides 24/7 access to Cloud Support Engineers via multiple channels.

893) Which AWS Support Plan provides a Technical Account Manager (TAM)? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: D Explanation: Enterprise Support includes a TAM for proactive guidance.

894) Which AWS Support Plan provides concierge support for billing and account management? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: D Explanation: Enterprise Support provides concierge support for billing and account management.

895) Which AWS Support Plan provides <1 hour response time for critical issues? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: C Explanation: Business Support provides <1 hour response time for production system down issues.

896) Which AWS Support Plan provides 15-minute response time for critical issues? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: D Explanation: Enterprise Support provides 15-minute response time for business-critical system down issues.

897) Which AWS Support Plan provides access to Infrastructure Event Management (IEM)? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: D Explanation: Enterprise Support provides IEM for planning and scaling events.

898) Which AWS Support Plan provides access to Trusted Advisor checks? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: C Explanation: Business and Enterprise Support provide full Trusted Advisor checks.

899) Which AWS Support Plan provides limited Trusted Advisor checks? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: A Explanation: Basic Support provides access to a limited set of Trusted Advisor checks.

900) Which AWS Support Plan provides architecture guidance tailored to your use case? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: D Explanation: Enterprise Support provides tailored architecture guidance.

901) Which AWS Support Plan provides general guidance within 24 hours? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: B Explanation: Developer Support provides general guidance within 24 hours.

902) Which AWS Support Plan provides system impaired response within 12 hours? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: B Explanation: Developer Support provides system impaired response within 12 hours.

903) Which AWS Support Plan provides production system impaired response within 4 hours? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: C Explanation: Business Support provides response within 4 hours for production system impaired issues.

904) Which AWS Support Plan provides business-critical system down response within 15 minutes? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: D Explanation: Enterprise Support provides 15-minute response time for business-critical system down issues.

905) Which AWS Support Plan provides access to Infrastructure Event Management (IEM) for scaling events? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: D Explanation: Enterprise Support includes IEM to help plan and manage large-scale events.

906) Which AWS Support Plan provides full access to Trusted Advisor checks? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: C Explanation: Business and Enterprise Support provide full access to Trusted Advisor checks.

907) Which AWS Support Plan provides limited Trusted Advisor checks only? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: A Explanation: Basic Support provides access to a limited set of Trusted Advisor checks (e.g., service limits, security groups).

🌍 Cloud Concepts & Global Infrastructure (Batch 1: 908–927)
908) Which AWS infrastructure component provides redundancy within a Region? A. Availability Zones B. Regions C. Edge Locations D. Data Centers

Correct Answer: A Explanation: Availability Zones are isolated locations within a Region, designed for high availability.

909) Which AWS infrastructure component provides geographic separation of resources? A. Availability Zones B. Regions C. Edge Locations D. Data Centers

Correct Answer: B Explanation: Regions are geographically distinct locations, each containing multiple Availability Zones.

910) Which AWS infrastructure component caches content closer to end-users? A. Availability Zones B. Regions C. Edge Locations D. Data Centers

Correct Answer: C Explanation: Edge Locations are part of CloudFront’s CDN, reducing latency by caching content near users.

911) Which AWS feature allows customers to scale resources up or down automatically? A. Elastic Load Balancing B. Auto Scaling C. AWS Config D. AWS CloudTrail

Correct Answer: B Explanation: Auto Scaling adjusts compute capacity dynamically to meet demand.

912) Which AWS benefit refers to paying only for the resources you consume? A. Scalability B. Pay-as-you-go pricing C. Fault tolerance D. High availability

Correct Answer: B Explanation: AWS uses a consumption-based pricing model, eliminating upfront costs.

913) Which AWS architectural principle reduces dependencies between system components? A. Modularity B. Decoupling C. Automation D. Elasticity

Correct Answer: B Explanation: Decoupling reduces dependencies, improving flexibility and fault tolerance.

914) Which AWS architectural principle emphasizes building systems from independent components? A. Modularity B. Decoupling C. Automation D. Elasticity

Correct Answer: A Explanation: Modularity enables independent development, testing, and scaling of system components.

915) Which AWS architectural principle emphasizes streamlining processes to minimize manual intervention? A. Modularity B. Decoupling C. Automation D. Elasticity

Correct Answer: C Explanation: Automation reduces human error and increases efficiency.

916) Which AWS benefit allows customers to deploy applications globally with low latency? A. Scalability B. Global Reach C. Fault tolerance D. Elasticity

Correct Answer: B Explanation: AWS’s global infrastructure enables low-latency access worldwide.

917) Which AWS benefit allows customers to adjust resources based on workload demand? A. Scalability and Elasticity B. Fault tolerance C. Modularity D. Automation

Correct Answer: A Explanation: Scalability and elasticity allow resources to expand or contract based on demand.

918) Which AWS benefit allows customers to experiment quickly with new ideas? A. Agility and Speed B. Fault tolerance C. Modularity D. Automation

Correct Answer: A Explanation: AWS enables rapid experimentation and faster time to market.

919) Which AWS benefit reduces operational overhead by providing managed services? A. Fault tolerance B. Managed Services C. Modularity D. Automation

Correct Answer: B Explanation: Managed services reduce the need to manage infrastructure directly.

920) Which AWS benefit ensures workloads remain operational across multiple AZs? A. High Availability B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: High availability ensures workloads remain operational across multiple AZs.

921) Which AWS benefit ensures workloads continue functioning despite failures? A. High Availability B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: B Explanation: Fault tolerance ensures workloads continue functioning despite hardware or software failures.

922) Which AWS benefit optimizes resource use to meet performance goals? A. Performance Efficiency B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Performance efficiency ensures workloads meet performance goals with optimized resource use.

923) Which AWS benefit ensures systems are easy to manage, monitor, and maintain? A. Operational Excellence B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Operational excellence ensures systems are easy to manage and maintain.

924) Which AWS benefit ensures data is protected from unauthorized access? A. Security B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Security ensures data and resources are protected from unauthorized access.

925) Which AWS benefit ensures costs are managed efficiently? A. Cost Optimization B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Cost optimization ensures resources are used efficiently to reduce costs.

926) Which AWS benefit ensures workloads can scale globally in minutes? A. Performance Efficiency B. Global Reach C. Scalability D. Elasticity

Correct Answer: B Explanation: Global reach allows workloads to scale globally in minutes.

927) Which AWS benefit ensures workloads can recover quickly from failures? A. Fault Tolerance B. Reliability C. Scalability D. Elasticity

Correct Answer: B Explanation: Reliability ensures workloads can recover quickly from failures.



🌍 Cloud Concepts & Global Infrastructure (Batch 1: 908–927)
908) Which AWS infrastructure component provides redundancy within a Region? A. Availability Zones B. Regions C. Edge Locations D. Data Centers

Correct Answer: A Explanation: Availability Zones are isolated locations within a Region, designed for high availability.

909) Which AWS infrastructure component provides geographic separation of resources? A. Availability Zones B. Regions C. Edge Locations D. Data Centers

Correct Answer: B Explanation: Regions are geographically distinct locations, each containing multiple Availability Zones.

910) Which AWS infrastructure component caches content closer to end-users? A. Availability Zones B. Regions C. Edge Locations D. Data Centers

Correct Answer: C Explanation: Edge Locations are part of CloudFront’s CDN, reducing latency by caching content near users.

911) Which AWS feature allows customers to scale resources up or down automatically? A. Elastic Load Balancing B. Auto Scaling C. AWS Config D. AWS CloudTrail

Correct Answer: B Explanation: Auto Scaling adjusts compute capacity dynamically to meet demand.

912) Which AWS benefit refers to paying only for the resources you consume? A. Scalability B. Pay-as-you-go pricing C. Fault tolerance D. High availability

Correct Answer: B Explanation: AWS uses a consumption-based pricing model, eliminating upfront costs.

913) Which AWS architectural principle reduces dependencies between system components? A. Modularity B. Decoupling C. Automation D. Elasticity

Correct Answer: B Explanation: Decoupling reduces dependencies, improving flexibility and fault tolerance.

914) Which AWS architectural principle emphasizes building systems from independent components? A. Modularity B. Decoupling C. Automation D. Elasticity

Correct Answer: A Explanation: Modularity enables independent development, testing, and scaling of system components.

915) Which AWS architectural principle emphasizes streamlining processes to minimize manual intervention? A. Modularity B. Decoupling C. Automation D. Elasticity

Correct Answer: C Explanation: Automation reduces human error and increases efficiency.

916) Which AWS benefit allows customers to deploy applications globally with low latency? A. Scalability B. Global Reach C. Fault tolerance D. Elasticity

Correct Answer: B Explanation: AWS’s global infrastructure enables low-latency access worldwide.

917) Which AWS benefit allows customers to adjust resources based on workload demand? A. Scalability and Elasticity B. Fault tolerance C. Modularity D. Automation

Correct Answer: A Explanation: Scalability and elasticity allow resources to expand or contract based on demand.

918) Which AWS benefit allows customers to experiment quickly with new ideas? A. Agility and Speed B. Fault tolerance C. Modularity D. Automation

Correct Answer: A Explanation: AWS enables rapid experimentation and faster time to market.

919) Which AWS benefit reduces operational overhead by providing managed services? A. Fault tolerance B. Managed Services C. Modularity D. Automation

Correct Answer: B Explanation: Managed services reduce the need to manage infrastructure directly.

920) Which AWS benefit ensures workloads remain operational across multiple AZs? A. High Availability B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: High availability ensures workloads remain operational across multiple AZs.

921) Which AWS benefit ensures workloads continue functioning despite failures? A. High Availability B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: B Explanation: Fault tolerance ensures workloads continue functioning despite hardware or software failures.

922) Which AWS benefit optimizes resource use to meet performance goals? A. Performance Efficiency B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Performance efficiency ensures workloads meet performance goals with optimized resource use.

923) Which AWS benefit ensures systems are easy to manage, monitor, and maintain? A. Operational Excellence B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Operational excellence ensures systems are easy to manage and maintain.

924) Which AWS benefit ensures data is protected from unauthorized access? A. Security B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Security ensures data and resources are protected from unauthorized access.

925) Which AWS benefit ensures costs are managed efficiently? A. Cost Optimization B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Cost optimization ensures resources are used efficiently to reduce costs.

926) Which AWS benefit ensures workloads can scale globally in minutes? A. Performance Efficiency B. Global Reach C. Scalability D. Elasticity

Correct Answer: B Explanation: Global reach allows workloads to scale globally in minutes.

927) Which AWS benefit ensures workloads can recover quickly from failures? A. Fault Tolerance B. Reliability C. Scalability D. Elasticity

Correct Answer: B Explanation: Reliability ensures workloads can recover quickly from failures.

928) Which AWS pricing model is best for workloads with variable usage patterns? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: A Explanation: On-Demand is best for workloads with variable usage patterns.

929) Which AWS pricing model is best for workloads with predictable usage? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: B Explanation: Reserved Instances are best for predictable workloads.

930) Which AWS pricing model is best for workloads that can tolerate interruptions? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: C Explanation: Spot Instances are best for workloads that can tolerate interruptions.

931) Which AWS pricing model is best for flexible compute usage across services? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: D Explanation: Savings Plans apply discounts across multiple compute services.

932) Which AWS service provides alerts when usage exceeds a defined threshold? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: A Explanation: Budgets sends alerts when usage exceeds thresholds.

933) Which AWS service provides visualizations of historical and forecasted spending? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: B Explanation: Cost Explorer enables visualization of usage and costs.

934) Which AWS service provides detailed reports for deeper analysis of usage and costs? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: C Explanation: CUR provides detailed reports for granular analysis.

935) Which AWS service provides consolidated billing across multiple accounts? A. AWS Budgets B. AWS Cost Explorer C. AWS Organizations D. AWS Trusted Advisor

Correct Answer: C Explanation: Organizations supports consolidated billing across accounts.

936) Which AWS service provides recommendations for cost optimization? A. AWS Trusted Advisor B. AWS Config C. AWS Inspector D. AWS Artifact

Correct Answer: A Explanation: Trusted Advisor provides cost optimization recommendations.

937) Which AWS service provides compliance documentation for billing? A. AWS Artifact B. AWS Config C. AWS Inspector D. AWS Security Hub

Correct Answer: A Explanation: Artifact provides compliance documentation for billing and audits.


Hybrid & Migration Services (Batch 2: 940–967)

938) Which AWS service provides dedicated network connections between on-premises and AWS? A. AWS VPN B. AWS Direct Connect C. Amazon VPC Peering D. AWS Transit Gateway

Correct Answer: B Explanation: Direct Connect establishes dedicated, high-bandwidth connections between on-premises and AWS.

939) Which AWS service provides encrypted tunnels over the internet to connect on-premises to AWS? A. AWS VPN B. AWS Direct Connect C. Amazon VPC Peering D. AWS Transit Gateway

Correct Answer: A Explanation: VPN provides secure, encrypted tunnels over the internet.

940) Which AWS service connects multiple VPCs together across accounts and regions? A. AWS VPN B. AWS Direct Connect C. Amazon VPC Peering D. AWS Transit Gateway

Correct Answer: D Explanation: Transit Gateway connects multiple VPCs and on-premises networks through a central hub.

941) Which AWS service provides point-to-point connectivity between two VPCs? A. AWS VPN B. AWS Direct Connect C. Amazon VPC Peering D. AWS Transit Gateway

Correct Answer: C Explanation: VPC Peering enables direct communication between two VPCs.

942) Which AWS service provides physical devices for transferring large datasets to AWS? A. AWS Snowball B. AWS Direct Connect C. AWS VPN D. AWS Transit Gateway

Correct Answer: A Explanation: Snowball provides physical devices for secure data transfer to AWS.

943) Which AWS service provides exabyte-scale data transfer using a shipping container? A. AWS Snowball B. AWS Snowmobile C. AWS Direct Connect D. AWS VPN

Correct Answer: B Explanation: Snowmobile is a shipping container-sized device for exabyte-scale data transfer.

944) Which AWS service provides database migration to AWS with minimal downtime? A. AWS DMS B. AWS Migration Hub C. AWS Snowball D. AWS Direct Connect

Correct Answer: A Explanation: Database Migration Service (DMS) migrates databases to AWS with minimal downtime.

945) Which AWS service provides a central dashboard for tracking migrations? A. AWS DMS B. AWS Migration Hub C. AWS Snowball D. AWS Direct Connect

Correct Answer: B Explanation: Migration Hub provides a central dashboard for tracking migration progress.

946) Which AWS service provides automated server migration to AWS? A. AWS SMS B. AWS DMS C. AWS Migration Hub D. AWS Snowball

Correct Answer: A Explanation: Server Migration Service (SMS) automates server migration to AWS.

947) Which AWS service provides hybrid cloud storage with on-premises caching? A. AWS Storage Gateway B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Storage Gateway provides hybrid cloud storage with local caching.

948) Which AWS service provides hybrid cloud file storage accessible via SMB/NFS? A. AWS Storage Gateway B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Storage Gateway offers file, tape, and volume gateways for hybrid storage.

949) Which AWS service provides hybrid cloud tape backup integration? A. AWS Storage Gateway B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Storage Gateway’s tape gateway integrates with existing backup workflows.

950) Which AWS service provides hybrid cloud volume storage integrated with EBS? A. AWS Storage Gateway B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Storage Gateway’s volume gateway integrates with EBS for hybrid storage.

951) Which AWS service provides hybrid cloud file caching for S3? A. AWS Storage Gateway B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Storage Gateway caches frequently accessed files locally while storing data in S3.

952) Which AWS service provides hybrid cloud integration for VMware environments? A. VMware Cloud on AWS B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: VMware Cloud on AWS integrates VMware environments with AWS infrastructure.

953) Which AWS service provides hybrid cloud Kubernetes clusters? A. Amazon EKS Anywhere B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: EKS Anywhere enables Kubernetes clusters to run on-premises and integrate with AWS.

954) Which AWS service provides hybrid cloud container orchestration? A. Amazon ECS Anywhere B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: ECS Anywhere enables container orchestration across on-premises and AWS.

955) Which AWS service provides hybrid cloud monitoring and management? A. AWS Systems Manager B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Systems Manager provides hybrid cloud monitoring and management.

956) Which AWS service provides hybrid cloud identity federation? A. AWS Directory Service B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Directory Service integrates on-premises directories with AWS.

957) Which AWS service provides hybrid cloud DNS resolution? A. Amazon Route 53 Resolver B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Route 53 Resolver provides DNS resolution between on-premises and AWS.

958) Which AWS service provides hybrid cloud networking with SD-WAN integration? A. AWS Cloud WAN B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Cloud WAN provides global networking with SD-WAN integration.

959) Which AWS service provides hybrid cloud edge computing? A. AWS Outposts B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Outposts extends AWS infrastructure and services to on-premises environments.

960) Which AWS service provides hybrid cloud edge computing in rugged environments? A. AWS Snowball Edge B. AWS Outposts C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Snowball Edge provides edge computing in rugged or disconnected environments.

961) Which AWS service provides hybrid cloud edge computing for telecom networks? A. AWS Wavelength B. AWS Outposts C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Wavelength brings AWS services to telecom networks for ultra-low latency.

962) Which AWS service provides hybrid cloud edge computing for 5G applications? A. AWS Wavelength B. AWS Outposts C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Wavelength integrates AWS services into 5G networks for low-latency applications.

963) Which AWS service provides hybrid cloud edge computing for disconnected environments? A. AWS Snowball Edge B. AWS Outposts C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Snowball Edge provides compute and storage in disconnected environments.

964) Which AWS service provides hybrid cloud edge computing for regulated industries? A. AWS Outposts B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Outposts provides AWS infrastructure in regulated industries requiring on-premises control.

965) Which AWS service provides hybrid cloud edge computing for IoT workloads? A. AWS Snowball Edge B. AWS Outposts C. AWS IoT Greengrass D. AWS Migration Hub

Correct Answer: C Explanation: IoT Greengrass extends AWS IoT services to edge devices.

966) Which AWS service provides hybrid cloud edge computing for machine learning inference? A. AWS Snowball Edge B. AWS Outposts C. AWS IoT Greengrass D. AWS SageMaker Edge Manager

Correct Answer: D Explanation: SageMaker Edge Manager manages ML models deployed to edge devices.

967) Which AWS service provides hybrid cloud migration tracking across multiple tools? A. AWS Migration Hub B. AWS Snowball C. AWS DMS D. AWS Direct Connect

Correct Answer: A Explanation: Migration Hub tracks migration progress across multiple tools and services.


Billing & Pricing (Batch 2: 968–987)
968) Which AWS pricing model is best for workloads with consistent, predictable usage? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: B Explanation: Reserved Instances provide discounts for predictable, steady-state workloads.

969) Which AWS pricing model is best for workloads that can tolerate interruptions? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: C Explanation: Spot Instances are low-cost but can be interrupted, ideal for fault-tolerant workloads.

970) Which AWS pricing model applies discounts across EC2, Fargate, and Lambda? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: D Explanation: Savings Plans provide flexible discounts across multiple compute services.

971) Which AWS service provides anomaly detection for unusual spending patterns? A. AWS Budgets B. AWS Cost Explorer C. AWS Cost Anomaly Detection D. AWS CUR

Correct Answer: C Explanation: Cost Anomaly Detection identifies unusual spending patterns.

972) Which AWS service provides compliance documentation for billing audits? A. AWS Artifact B. AWS Config C. AWS Inspector D. AWS Security Hub

Correct Answer: A Explanation: Artifact provides compliance documentation for billing and audits.

973) Which AWS service provides consolidated billing across multiple accounts? A. AWS Organizations B. AWS Budgets C. AWS Cost Explorer D. AWS CUR

Correct Answer: A Explanation: Organizations supports consolidated billing across accounts.

974) Which AWS service provides detailed usage data for integration with BI tools? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: C Explanation: CUR provides detailed usage data for integration with BI tools.

975) Which AWS service provides proactive cost optimization recommendations? A. AWS Trusted Advisor B. AWS Config C. AWS Inspector D. AWS Artifact

Correct Answer: A Explanation: Trusted Advisor provides proactive cost optimization recommendations.

976) Which AWS pricing model is best for unpredictable workloads? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: A Explanation: On-Demand is best for unpredictable workloads due to flexibility.

977) Which AWS service provides alerts when spending exceeds a defined threshold? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: A Explanation: Budgets sends alerts when spending or usage exceeds thresholds.

978) Which AWS service provides visualizations of historical and forecasted spending? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: B Explanation: Cost Explorer enables visualization of usage and costs.

979) Which AWS service provides free tier usage tracking? A. AWS Budgets B. AWS Cost Explorer C. AWS Free Tier Dashboard D. AWS CUR

Correct Answer: C Explanation: Free Tier Dashboard tracks usage against free tier limits.

980) Which AWS service provides account-level billing management? A. AWS Organizations B. AWS Budgets C. AWS Cost Explorer D. AWS CUR

Correct Answer: A Explanation: Organizations provides centralized billing management across accounts.

981) Which AWS service provides compliance documentation for billing? A. AWS Artifact B. AWS Config C. AWS Inspector D. AWS Security Hub

Correct Answer: A Explanation: Artifact provides compliance documentation for billing and audits.

982) Which AWS service provides recommendations for cost optimization? A. AWS Trusted Advisor B. AWS Config C. AWS Inspector D. AWS Artifact

Correct Answer: A Explanation: Trusted Advisor provides cost optimization recommendations.

983) Which AWS pricing model is best for workloads with variable usage patterns? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: A Explanation: On-Demand is best for workloads with variable usage patterns.

984) Which AWS pricing model is best for workloads with predictable usage? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: B Explanation: Reserved Instances are best for predictable workloads.

985) Which AWS pricing model is best for workloads that can tolerate interruptions? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: C Explanation: Spot Instances are best for workloads that can tolerate interruptions.

986) Which AWS pricing model is best for flexible compute usage across services? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: D Explanation: Savings Plans apply discounts across multiple compute services.

987) Which AWS service provides detailed reports for deeper analysis of usage and costs? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: C Explanation: CUR provides detailed reports for granular analysis.

🚚 Hybrid & Migration Services (Batch 3: 988–1007)
988) Which AWS service provides hybrid cloud storage with local caching? A. AWS Storage Gateway B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Storage Gateway provides hybrid cloud storage with local caching.

989) Which AWS service provides physical devices for secure data transfer to AWS? A. AWS Snowball B. AWS Direct Connect C. AWS VPN D. AWS Transit Gateway

Correct Answer: A Explanation: Snowball provides physical devices for secure data transfer.

990) Which AWS service provides exabyte-scale data transfer using a shipping container? A. AWS Snowball B. AWS Snowmobile C. AWS Direct Connect D. AWS VPN

Correct Answer: B Explanation: Snowmobile is a shipping container-sized device for exabyte-scale data transfer.

991) Which AWS service provides database migration to AWS with minimal downtime? A. AWS DMS B. AWS Migration Hub C. AWS Snowball D. AWS Direct Connect

Correct Answer: A Explanation: Database Migration Service (DMS) migrates databases to AWS with minimal downtime.

992) Which AWS service provides a central dashboard for tracking migrations? A. AWS DMS B. AWS Migration Hub C. AWS Snowball D. AWS Direct Connect

Correct Answer: B Explanation: Migration Hub provides a central dashboard for tracking migration progress.

993) Which AWS service automates server migration to AWS? A. AWS SMS B. AWS DMS C. AWS Migration Hub D. AWS Snowball

Correct Answer: A Explanation: Server Migration Service (SMS) automates server migration to AWS.

994) Which AWS service provides hybrid cloud integration for VMware environments? A. VMware Cloud on AWS B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: VMware Cloud on AWS integrates VMware environments with AWS infrastructure.

995) Which AWS service provides hybrid cloud Kubernetes clusters? A. Amazon EKS Anywhere B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: EKS Anywhere enables Kubernetes clusters to run on-premises and integrate with AWS.

996) Which AWS service provides hybrid cloud container orchestration? A. Amazon ECS Anywhere B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: ECS Anywhere enables container orchestration across on-premises and AWS.

997) Which AWS service provides hybrid cloud monitoring and management? A. AWS Systems Manager B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Systems Manager provides hybrid cloud monitoring and management.

998) Which AWS service integrates on-premises directories with AWS? A. AWS Directory Service B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Directory Service integrates on-premises directories with AWS.

999) Which AWS service provides DNS resolution between on-premises and AWS? A. Amazon Route 53 Resolver B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Route 53 Resolver provides DNS resolution between on-premises and AWS.

1000) Which AWS service provides hybrid cloud edge computing for disconnected environments? A. AWS Snowball Edge B. AWS Outposts C. AWS IoT Greengrass D. AWS Migration Hub

Correct Answer: A Explanation: Snowball Edge provides compute and storage in disconnected or rugged environments.

1001) Which AWS service provides hybrid cloud edge computing for regulated industries? A. AWS Outposts B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Outposts delivers AWS infrastructure on-premises for industries requiring strict compliance.

1002) Which AWS service extends AWS IoT services to edge devices? A. AWS IoT Greengrass B. AWS Snowball Edge C. AWS Outposts D. AWS Migration Hub

Correct Answer: A Explanation: IoT Greengrass extends AWS IoT services to edge devices for local execution.

1003) Which AWS service manages ML models deployed to edge devices? A. AWS Snowball Edge B. AWS Outposts C. AWS IoT Greengrass D. AWS SageMaker Edge Manager

Correct Answer: D Explanation: SageMaker Edge Manager manages ML models deployed to edge devices.

1004) Which AWS service provides hybrid cloud migration tracking across multiple tools? A. AWS Migration Hub B. AWS Snowball C. AWS DMS D. AWS Direct Connect

Correct Answer: A Explanation: Migration Hub tracks migration progress across multiple tools and services.

1005) Which AWS service provides hybrid cloud networking with SD-WAN integration? A. AWS Cloud WAN B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Cloud WAN provides global networking with SD-WAN integration.

1006) Which AWS service brings AWS services to telecom networks for ultra-low latency? A. AWS Wavelength B. AWS Outposts C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Wavelength integrates AWS services into telecom networks for ultra-low latency.

1007) Which AWS service provides hybrid cloud edge computing for 5G applications? A. AWS Wavelength B. AWS Outposts C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Wavelength integrates AWS services into 5G networks for low-latency applications.

💰 Billing & Pricing (Batch 3: 1008–1027)
1008) Which AWS service provides alerts when usage exceeds a defined threshold? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: A Explanation: Budgets sends alerts when usage or costs exceed thresholds.

1009) Which AWS service provides visualizations of historical and forecasted spending? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: B Explanation: Cost Explorer enables visualization of usage and costs.

1010) Which AWS service provides detailed reports for deeper analysis of usage and costs? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: C Explanation: CUR provides detailed reports for granular analysis.

1011) Which AWS service provides consolidated billing across multiple accounts? A. AWS Budgets B. AWS Cost Explorer C. AWS Organizations D. AWS Trusted Advisor

Correct Answer: C Explanation: Organizations supports consolidated billing across accounts.

1012) Which AWS service provides recommendations for cost optimization? A. AWS Trusted Advisor B. AWS Config C. AWS Inspector D. AWS Artifact

Correct Answer: A Explanation: Trusted Advisor provides cost optimization recommendations.

1013) Which AWS service provides compliance documentation for billing? A. AWS Artifact B. AWS Config C. AWS Inspector D. AWS Security Hub

Correct Answer: A Explanation: Artifact provides compliance documentation for billing and audits.

1014) Which AWS pricing model is best for unpredictable workloads? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: A Explanation: On-Demand is best for unpredictable workloads due to flexibility.

1015) Which AWS pricing model is best for predictable workloads? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: B Explanation: Reserved Instances are best for predictable workloads.

1016) Which AWS pricing model is best for workloads that can tolerate interruptions? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: C Explanation: Spot Instances are best for workloads that can tolerate interruptions.

1017) Which AWS pricing model is best for flexible compute usage across services? A. On-Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: D Explanation: Savings Plans apply discounts across multiple compute services.

1018) Which AWS service provides anomaly detection for unusual spending patterns? A. AWS Budgets B. AWS Cost Explorer C. AWS Cost Anomaly Detection D. AWS CUR

Correct Answer: C Explanation: Cost Anomaly Detection identifies unusual spending patterns.

1019) Which AWS service provides free tier usage tracking? A. AWS Budgets B. AWS Cost Explorer C. AWS Free Tier Dashboard D. AWS CUR

Correct Answer: C Explanation: Free Tier Dashboard tracks usage against free tier limits.

1020) Which AWS service provides account-level billing management? A. AWS Organizations B. AWS Budgets C. AWS Cost Explorer D. AWS CUR

Correct Answer: A Explanation: Organizations provides centralized billing management across accounts.

1021) Which AWS service provides compliance documentation for billing audits? A. AWS Artifact B. AWS Config C. AWS Inspector D. AWS Security Hub

Correct Answer: A Explanation: Artifact provides compliance documentation for billing audits.

1022) Which AWS service provides proactive cost optimization recommendations? A. AWS Trusted Advisor B. AWS Config C. AWS Inspector D. AWS Artifact

Correct Answer: A Explanation: Trusted Advisor provides proactive cost optimization recommendations.

1023) Which AWS service provides detailed usage data for integration with BI tools? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: C Explanation: CUR provides detailed usage data for integration with BI tools.

1024) Which AWS service provides consolidated billing with linked accounts? A. AWS Organizations B. AWS Budgets C. AWS Cost Explorer D. AWS CUR

Correct Answer: A Explanation: Organizations supports consolidated billing with linked accounts.

1025) Which AWS service provides alerts when spending exceeds a defined threshold? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: A Explanation: Budgets sends alerts when spending exceeds thresholds.

1026) Which AWS service provides visualizations of historical and forecasted spending? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: B Explanation: Cost Explorer enables visualization of usage and costs.

1027) Which AWS service provides detailed reports for deeper analysis of usage and costs? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: C Explanation: CUR provides detailed reports for granular analysis.

Hybrid & Migration Services (Batch 4: 1008–1027)
1008) Which AWS service provides hybrid cloud storage with tape backup integration? A. AWS Storage Gateway B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Storage Gateway’s tape gateway integrates with existing backup workflows for hybrid storage.

1009) Which AWS service provides hybrid cloud file storage accessible via SMB/NFS protocols? A. AWS Storage Gateway B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Storage Gateway offers file gateways that support SMB/NFS protocols.

1010) Which AWS service provides hybrid cloud volume storage integrated with EBS? A. AWS Storage Gateway B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Storage Gateway’s volume gateway integrates with EBS for hybrid storage.

1011) Which AWS service provides hybrid cloud file caching for S3? A. AWS Storage Gateway B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Storage Gateway caches frequently accessed files locally while storing data in S3.

1012) Which AWS service provides hybrid cloud integration for VMware workloads? A. VMware Cloud on AWS B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: VMware Cloud on AWS integrates VMware workloads with AWS infrastructure.

1013) Which AWS service enables Kubernetes clusters to run on-premises and integrate with AWS? A. Amazon EKS Anywhere B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: EKS Anywhere enables Kubernetes clusters to run on-premises and integrate with AWS.

1014) Which AWS service enables container orchestration across on-premises and AWS? A. Amazon ECS Anywhere B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: ECS Anywhere enables container orchestration across on-premises and AWS.

1015) Which AWS service provides hybrid cloud monitoring and management? A. AWS Systems Manager B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Systems Manager provides hybrid cloud monitoring and management.

1016) Which AWS service integrates on-premises directories with AWS? A. AWS Directory Service B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Directory Service integrates on-premises directories with AWS.

1017) Which AWS service provides DNS resolution between on-premises and AWS? A. Amazon Route 53 Resolver B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Route 53 Resolver provides DNS resolution between on-premises and AWS.

1018) Which AWS service provides global networking with SD-WAN integration? A. AWS Cloud WAN B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Cloud WAN provides global networking with SD-WAN integration.

1019) Which AWS service extends AWS infrastructure and services to on-premises environments? A. AWS Outposts B. AWS Snowball C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Outposts extends AWS infrastructure and services to on-premises environments.

1020) Which AWS service provides edge computing in rugged or disconnected environments? A. AWS Snowball Edge B. AWS Outposts C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Snowball Edge provides compute and storage in rugged or disconnected environments.

1021) Which AWS service brings AWS services to telecom networks for ultra-low latency? A. AWS Wavelength B. AWS Outposts C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Wavelength integrates AWS services into telecom networks for ultra-low latency.

1022) Which AWS service integrates AWS services into 5G networks for low-latency applications? A. AWS Wavelength B. AWS Outposts C. AWS DMS D. AWS Migration Hub

Correct Answer: A Explanation: Wavelength integrates AWS services into 5G networks for low-latency applications.

1023) Which AWS service extends AWS IoT services to edge devices? A. AWS IoT Greengrass B. AWS Snowball Edge C. AWS Outposts D. AWS Migration Hub

Correct Answer: A Explanation: IoT Greengrass extends AWS IoT services to edge devices for local execution.

1024) Which AWS service manages ML models deployed to edge devices? A. AWS Snowball Edge B. AWS Outposts C. AWS IoT Greengrass D. AWS SageMaker Edge Manager

Correct Answer: D Explanation: SageMaker Edge Manager manages ML models deployed to edge devices.

1025) Which AWS service provides hybrid cloud migration tracking across multiple tools? A. AWS Migration Hub B. AWS Snowball C. AWS DMS D. AWS Direct Connect

Correct Answer: A Explanation: Migration Hub tracks migration progress across multiple tools and services.

1026) Which AWS service provides database migration with minimal downtime? A. AWS DMS B. AWS Migration Hub C. AWS Snowball D. AWS Direct Connect

Correct Answer: A Explanation: Database Migration Service (DMS) migrates databases to AWS with minimal downtime.

1027) Which AWS service automates server migration to AWS? A. AWS SMS B. AWS DMS C. AWS Migration Hub D. AWS Snowball

Correct Answer: A Explanation: Server Migration Service (SMS) automates server migration to AWS.

🔹 Next Step: Shared Responsibility Model (Batch 20 Questions)
1028) In the Shared Responsibility Model, who is responsible for securing the physical infrastructure? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: A Explanation: AWS secures physical infrastructure such as data centers, hardware, and networking.

1029) In the Shared Responsibility Model, who is responsible for configuring IAM policies? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: B Explanation: Customers configure IAM policies to control access to their resources.

1030) In the Shared Responsibility Model, who is responsible for patching the underlying hypervisor? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: A Explanation: AWS patches and maintains the underlying hypervisor and physical hosts.

1031) In the Shared Responsibility Model, who is responsible for patching guest operating systems? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: B Explanation: Customers patch guest operating systems running on EC2 instances.

1032) In the Shared Responsibility Model, who is responsible for configuring network ACLs and security groups? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: B Explanation: Customers configure security groups and network ACLs to control traffic.

1033) In the Shared Responsibility Model, who is responsible for encrypting data at rest in S3? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: B Explanation: Customers enable encryption for their data at rest in S3.

1034) In the Shared Responsibility Model, who is responsible for managing compliance certifications? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: A Explanation: AWS manages compliance certifications for infrastructure and services.

1035) In the Shared Responsibility Model, who is responsible for managing application-level security? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: B Explanation: Customers manage application-level security such as input validation and authentication.

1036) In the Shared Responsibility Model, who is responsible for securing AWS-managed services like DynamoDB? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: A Explanation: AWS secures managed services like DynamoDB, RDS, and S3 infrastructure.

1037) In the Shared Responsibility Model, who is responsible for managing user credentials? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: B Explanation: Customers manage IAM user credentials and MFA.

1038) In the Shared Responsibility Model, who is responsible for configuring logging and monitoring? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: B Explanation: Customers configure CloudTrail, CloudWatch, and Config for monitoring.

1039) In the Shared Responsibility Model, who is responsible for securing AWS’s global network backbone? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: A Explanation: AWS secures the global network backbone connecting regions and AZs.

1040) In the Shared Responsibility Model, who is responsible for securing customer data? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: B Explanation: Customers are responsible for securing their data stored in AWS.

1041) In the Shared Responsibility Model, who is responsible for configuring encryption keys in KMS? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: B Explanation: Customers configure and manage encryption keys in KMS.

1042) In the Shared Responsibility Model, who is responsible for securing AWS’s hardware lifecycle? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: A Explanation: AWS secures hardware lifecycle from provisioning to decommissioning.

1043) In the Shared Responsibility Model, who is responsible for configuring firewall rules? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: B Explanation: Customers configure firewall rules for their workloads.

1044) In the Shared Responsibility Model, who is responsible for securing AWS’s virtualization layer? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: A Explanation: AWS secures the virtualization layer and hypervisor.

1045) In the Shared Responsibility Model, who is responsible for securing AWS’s data centers? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: A Explanation: AWS secures physical data centers with guards, biometrics, and surveillance.

1046) In the Shared Responsibility Model, who is responsible for configuring IAM roles? A. AWS B. Customer C. Both D. Third-party vendors

Correct Answer: B Explanation: Customers configure IAM roles to grant temporary access.

Confusing Concepts Mix‑Up (1048–1067)
1048) In the Shared Responsibility Model, who is responsible for patching the EC2 operating system? A. AWS B. Customer C. Both D. Third‑party vendors

Correct Answer: B Explanation: Customers patch guest operating systems; AWS patches the underlying hypervisor.

1049) Which CAF perspective emphasizes workforce training and cultural change? A. People B. Governance C. Security D. Operations

Correct Answer: A Explanation: The People perspective focuses on skills, training, and organizational culture.

1050) Which Well‑Architected pillar emphasizes designing workloads to withstand component failures? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: B Explanation: Reliability ensures workloads can recover from failures.

1051) In the Shared Responsibility Model, who is responsible for securing AWS’s physical data centers? A. AWS B. Customer C. Both D. Third‑party vendors

Correct Answer: A Explanation: AWS secures physical facilities, hardware, and networking.

1052) Which CAF perspective emphasizes aligning IT strategy with business outcomes? A. Business B. Governance C. Platform D. Operations

Correct Answer: A Explanation: The Business perspective ensures IT initiatives deliver measurable business value.

1053) Which Well‑Architected pillar emphasizes protecting data at rest and in transit? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: A Explanation: Security ensures workloads are protected from unauthorized access.

1054) In the Shared Responsibility Model, who is responsible for configuring IAM policies? A. AWS B. Customer C. Both D. Third‑party vendors

Correct Answer: B Explanation: Customers configure IAM policies to control access.

1055) Which CAF perspective emphasizes compliance, risk management, and accountability? A. Business B. Governance C. Security D. Operations

Correct Answer: B Explanation: Governance ensures compliance and accountability.

1056) Which Well‑Architected pillar emphasizes minimizing costs while meeting business goals? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: D Explanation: Cost Optimization ensures resources are used efficiently.

1057) In the Shared Responsibility Model, who is responsible for encrypting customer data in S3? A. AWS B. Customer C. Both D. Third‑party vendors

Correct Answer: B Explanation: Customers enable encryption for their data at rest in S3.

1058) Which CAF perspective emphasizes infrastructure and platform design? A. Business B. Governance C. Platform D. Operations

Correct Answer: C Explanation: Platform perspective focuses on designing and building cloud infrastructure.

1059) Which Well‑Architected pillar emphasizes optimizing resources for performance goals? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: C Explanation: Performance Efficiency ensures workloads meet performance goals.

1060) In the Shared Responsibility Model, who is responsible for patching the hypervisor? A. AWS B. Customer C. Both D. Third‑party vendors

Correct Answer: A Explanation: AWS patches and maintains the underlying hypervisor.

1061) Which CAF perspective emphasizes monitoring, incident management, and continuous improvement? A. Business B. Governance C. Security D. Operations

Correct Answer: D Explanation: Operations perspective emphasizes monitoring and incident response.

1062) Which Well‑Architected pillar emphasizes continuous improvement of operations? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: D Explanation: Operational Excellence emphasizes continuous improvement and efficient operations.

1063) In the Shared Responsibility Model, who is responsible for configuring firewall rules? A. AWS B. Customer C. Both D. Third‑party vendors

Correct Answer: B Explanation: Customers configure firewall rules for their workloads.

1064) Which CAF perspective emphasizes secure workload design and proactive security measures? A. Business B. Governance C. Security D. Operations

Correct Answer: C Explanation: Security perspective ensures workloads are secure and compliant.

1065) Which Well‑Architected pillar emphasizes using elasticity to meet demand? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: C Explanation: Performance Efficiency emphasizes elasticity to meet workload demand.

1066) In the Shared Responsibility Model, who is responsible for managing IAM user credentials and MFA? A. AWS B. Customer C. Both D. Third‑party vendors

Correct Answer: B Explanation: Customers manage IAM user credentials and MFA.

1067) Which CAF perspective emphasizes financial accountability and compliance with regulations? A. Business B. Governance C. Security D. Operations

Correct Answer: B Explanation: Governance perspective emphasizes financial accountability and compliance.

🎯 Scenario‑Based CCP Questions (1068–1087)
1068) Your company runs EC2 instances and notices unpatched operating system vulnerabilities. Who is responsible for applying those patches? A. AWS B. Customer C. Both D. Third‑party vendor

Correct Answer: B Explanation: In the Shared Responsibility Model, customers patch guest operating systems.

1069) A retail company wants to train staff on cloud skills and change organizational culture to embrace cloud adoption. Which CAF perspective is most relevant? A. People B. Governance C. Security D. Operations

Correct Answer: A Explanation: The People perspective focuses on workforce enablement and cultural change.

1070) A startup wants to minimize costs while ensuring workloads meet business goals. Which Well‑Architected pillar should guide them? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: D Explanation: Cost Optimization ensures efficient resource use to reduce costs.

1071) A financial services company needs compliance documentation for audits. Which AWS service provides this? A. AWS Artifact B. AWS Config C. AWS Inspector D. AWS Security Hub

Correct Answer: A Explanation: Artifact provides compliance documentation and audit reports.

1072) A media company wants to cache video content closer to end‑users worldwide. Which AWS infrastructure component should they use? A. Availability Zones B. Regions C. Edge Locations D. Local Zones

Correct Answer: C Explanation: Edge Locations cache content closer to users via CloudFront.

1073) A customer wants to migrate their Oracle database to AWS with minimal downtime. Which service should they use? A. AWS DMS B. AWS Migration Hub C. AWS Snowball D. AWS SMS

Correct Answer: A Explanation: Database Migration Service (DMS) migrates databases with minimal downtime.

1074) A company wants to connect multiple VPCs across accounts and regions through a central hub. Which service should they use? A. VPC Peering B. AWS VPN C. AWS Direct Connect D. AWS Transit Gateway

Correct Answer: D Explanation: Transit Gateway connects multiple VPCs and on‑premises networks.

1075) A customer wants to reduce costs for steady‑state workloads by committing to usage for 3 years. Which pricing model applies? A. On‑Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: B Explanation: Reserved Instances provide discounts for long‑term commitments.

1076) A healthcare company wants to ensure workloads remain operational during component failures. Which Well‑Architected pillar applies? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: B Explanation: Reliability ensures workloads can withstand and recover from failures.

1077) A customer wants to track migration progress across multiple tools in one dashboard. Which AWS service should they use? A. AWS DMS B. AWS Migration Hub C. AWS Snowball D. AWS SMS

Correct Answer: B Explanation: Migration Hub provides a central dashboard for tracking migrations.

1078) A company wants to experiment quickly with new ideas and deploy globally in minutes. Which cloud benefit applies? A. Agility and Speed B. Fault Tolerance C. Scalability D. Elasticity

Correct Answer: A Explanation: Agility and speed allow rapid experimentation and deployment.

1079) A customer wants to analyze historical spending and forecast future costs. Which AWS service should they use? A. AWS Budgets B. AWS Cost Explorer C. AWS CUR D. AWS Organizations

Correct Answer: B Explanation: Cost Explorer provides visualizations of historical and forecasted spending.

1080) A company wants to secure workloads by enabling traceability through logging. Which Well‑Architected pillar emphasizes this? A. Security B. Reliability C. Performance Efficiency D. Operational Excellence

Correct Answer: A Explanation: Security emphasizes enabling traceability through logging and monitoring.

1081) A customer wants to transfer petabytes of data securely to AWS without using the internet. Which service should they use? A. AWS Snowball B. AWS Direct Connect C. AWS VPN D. AWS Transit Gateway

Correct Answer: A Explanation: Snowball provides physical devices for secure data transfer.

1082) A company wants to ensure financial accountability and compliance during cloud adoption. Which CAF perspective applies? A. Business B. Governance C. Security D. Operations

Correct Answer: B Explanation: Governance ensures compliance and financial accountability.

1083) A customer wants to run AWS services on‑premises for regulatory reasons. Which service should they use? A. AWS Outposts B. AWS Snowball Edge C. AWS Wavelength D. AWS Migration Hub

Correct Answer: A Explanation: Outposts extends AWS infrastructure to on‑premises environments.

1084) A company wants to reduce costs by eliminating unused resources. Which Well‑Architected pillar emphasizes this? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: D Explanation: Cost Optimization emphasizes eliminating unused resources.

1085) A customer wants to connect their on‑premises data center to AWS using a dedicated, high‑bandwidth connection. Which service should they use? A. AWS VPN B. AWS Direct Connect C. AWS Transit Gateway D. VPC Peering

Correct Answer: B Explanation: Direct Connect provides dedicated, high‑bandwidth connections.

1086) A company wants to ensure workloads are easy to manage, monitor, and maintain. Which Well‑Architected pillar applies? A. Operational Excellence B. Security C. Reliability D. Performance Efficiency

Correct Answer: A Explanation: Operational Excellence ensures workloads are easy to manage and maintain.

1087) A customer wants to migrate servers to AWS automatically. Which service should they use? A. AWS SMS B. AWS DMS C. AWS Migration Hub D. AWS Snowball

Correct Answer: A Explanation: Server Migration Service (SMS) automates server migration to AWS.

Longer Scenario‑Based CCP Questions (1088–1107)
1088) A healthcare startup is deploying patient record systems on AWS. They use Amazon RDS for the database and EC2 for application servers. During a compliance audit, regulators ask who is responsible for patching the RDS database engine versus patching the EC2 operating system. A. AWS patches both RDS and EC2 OS B. Customer patches both RDS and EC2 OS C. AWS patches RDS, Customer patches EC2 OS D. Customer patches RDS, AWS patches EC2 OS

Correct Answer: C Explanation: AWS manages patching for managed services like RDS, while customers patch guest operating systems on EC2.

1089) A global retailer wants to expand into Africa. They need low‑latency access for customers in Nairobi while keeping centralized governance and compliance controls. Which combination of AWS concepts applies? A. Regions + Availability Zones B. Edge Locations + CloudFront + CAF Governance perspective C. Outposts + CAF People perspective D. Wavelength + Well‑Architected Reliability pillar

Correct Answer: B Explanation: Edge Locations via CloudFront reduce latency, while CAF Governance ensures compliance across expansion.

1090) A fintech company wants to reduce costs for predictable workloads, but also needs flexibility to run Lambda functions and ECS tasks. Which pricing model best fits this scenario? A. On‑Demand only B. Reserved Instances only C. Spot Instances only D. Savings Plans

Correct Answer: D Explanation: Savings Plans apply discounts across EC2, Fargate, and Lambda, balancing predictability with flexibility.

1091) A logistics company wants to migrate its Oracle database to AWS with minimal downtime. At the same time, executives want a dashboard to track migration progress across multiple tools. Which services should they use together? A. AWS DMS + AWS Migration Hub B. AWS SMS + AWS Snowball C. AWS Direct Connect + AWS VPN D. AWS Outposts + AWS Wavelength

Correct Answer: A Explanation: DMS migrates databases with minimal downtime, while Migration Hub tracks migration progress.

1092) A media company wants to stream video globally. They need caching near users, redundancy across multiple AZs, and cost optimization for unused resources. Which combination of AWS concepts applies? A. Edge Locations + High Availability + Well‑Architected Cost Optimization pillar B. Regions + CAF People perspective + Reserved Instances C. Outposts + CAF Governance perspective + Spot Instances D. Wavelength + Well‑Architected Security pillar + Savings Plans

Correct Answer: A Explanation: Edge Locations cache content, AZs provide high availability, and Cost Optimization eliminates unused resources.

1093) A government agency wants to run AWS services on‑premises due to regulatory requirements. They also want to ensure workloads are secure and compliant. Which combination applies? A. AWS Outposts + CAF Security perspective B. AWS Snowball + CAF People perspective C. AWS Wavelength + Well‑Architected Reliability pillar D. AWS Direct Connect + CAF Business perspective

Correct Answer: A Explanation: Outposts extends AWS infrastructure on‑premises, while CAF Security ensures compliance.

1094) A startup wants agility to experiment quickly, but also needs to monitor workloads and evolve operational procedures frequently. Which cloud benefit and Well‑Architected pillar apply? A. Agility + Operational Excellence B. Scalability + Reliability C. Elasticity + Security D. Fault Tolerance + Cost Optimization

Correct Answer: A Explanation: Agility enables rapid experimentation, while Operational Excellence emphasizes monitoring and evolving procedures.

1095) A bank wants to connect its on‑premises data center to AWS using a dedicated, high‑bandwidth connection. At the same time, they want encrypted tunnels for backup connectivity. Which services should they use together? A. AWS Direct Connect + AWS VPN B. AWS Transit Gateway + VPC Peering C. AWS Cloud WAN + AWS Outposts D. AWS Snowball + AWS SMS

Correct Answer: A Explanation: Direct Connect provides dedicated connectivity, while VPN provides encrypted backup tunnels.

1096) A company wants to reduce costs by committing to 3 years of EC2 usage, but also wants flexibility to run Lambda functions. Which pricing model applies? A. Reserved Instances B. Spot Instances C. Savings Plans D. On‑Demand

Correct Answer: C Explanation: Savings Plans provide discounts across EC2 and serverless services like Lambda.

1097) A university wants to train staff on cloud adoption, align IT strategy with business outcomes, and ensure compliance with regulations. Which CAF perspectives apply together? A. People + Business + Governance B. Platform + Security + Operations C. Business + Security + People D. Governance + Operations + Platform

Correct Answer: A Explanation: People covers training, Business aligns IT strategy, Governance ensures compliance.

1098) A company wants to migrate petabytes of data securely to AWS without using the internet. They also want to run compute workloads in disconnected environments. Which services apply? A. AWS Snowball + AWS Snowball Edge B. AWS Outposts + AWS Wavelength C. AWS DMS + AWS Migration Hub D. AWS Direct Connect + AWS VPN

Correct Answer: A Explanation: Snowball transfers large datasets, while Snowball Edge provides compute in disconnected environments.

1099) A customer wants to ensure workloads remain operational during component failures, while also protecting data at rest and in transit. Which Well‑Architected pillars apply together? A. Reliability + Security B. Cost Optimization + Performance Efficiency C. Operational Excellence + Security D. Reliability + Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, while Security protects data.

1100) A company wants to monitor unusual spending patterns and receive alerts when costs exceed thresholds. Which AWS services should they use together? A. AWS Budgets + AWS Cost Anomaly Detection B. AWS Cost Explorer + AWS CUR C. AWS Trusted Advisor + AWS Artifact D. AWS Organizations + AWS Config

Correct Answer: A Explanation: Budgets provides alerts, while Cost Anomaly Detection identifies unusual spending.

1101) A telecom provider wants to deliver ultra‑low latency applications over 5G networks. Which AWS service applies? A. AWS Wavelength B. AWS Outposts C. AWS Snowball Edge D. AWS Migration Hub

Correct Answer: A Explanation: Wavelength integrates AWS services into 5G networks for ultra‑low latency.

1102) A company wants to ensure workloads are easy to manage, monitor, and maintain, while also minimizing costs. Which Well‑Architected pillars apply together? A. Operational Excellence + Cost Optimization B. Security + Reliability C. Performance Efficiency + Security D. Reliability + Operational Excellence

Correct Answer: A Explanation: Operational Excellence ensures manageability, while Cost Optimization reduces costs.

1103) A customer wants to migrate servers to AWS automatically, while also tracking migration progress. Which services apply together? A. AWS SMS + AWS Migration Hub B. AWS DMS + AWS Snowball C. AWS Outposts + AWS Wavelength D. AWS Direct Connect + AWS VPN

Correct Answer: A Explanation: SMS automates server migration, while Migration Hub tracks progress.

1104) A company wants to democratize advanced technologies like machine learning, while also ensuring workloads meet performance goals. Which Well‑Architected pillar applies? A. Performance Efficiency B. Security C. Reliability D. Cost Optimization

Correct Answer: A Explanation: Performance Efficiency emphasizes democratizing advanced technologies and optimizing performance.

1105) A customer wants to run AWS services on‑premises for compliance, while also extending IoT services to edge devices. Which services apply together? A. AWS Outposts + AWS IoT Greengrass B. AWS Snowball Edge + AWS DMS C. AWS Wavelength + AWS SMS D. AWS Migration Hub + AWS Cloud WAN

Correct Answer: A Explanation: Outposts extends AWS infrastructure on‑premises, while IoT Greengrass extends IoT services to edge devices.

1106) A company wants to ensure workloads can scale globally in minutes, while also aligning IT strategy with business outcomes. Which cloud benefit and CAF perspective apply together? A. Global Reach + Business perspective B. Fault Tolerance + Governance perspective C. Elasticity + People perspective D. Scalability + Security perspective

Correct Answer: A Explanation: Global Reach enables worldwide scaling, while the Business perspective aligns IT with business goals.

1107) A customer wants to reduce costs by eliminating unused resources, while also evolving operational procedures frequently. Which Well‑Architected pillars apply together? A. Cost Optimization + Operational Excellence B. Security + Reliability C. Performance Efficiency + Security D. Reliability + Cost Optimization

Correct Answer: A Explanation: Cost Optimization eliminates unused resources, while Operational Excellence evolves procedures.


Longer Scenario‑Based CCP Questions (1108–1127)
1108) A hospital is deploying a patient monitoring system using EC2 and S3. Regulators ask who is responsible for encrypting patient data at rest in S3 and who secures the physical servers hosting S3. A. AWS encrypts data, AWS secures servers B. Customer encrypts data, AWS secures servers C. AWS encrypts data, Customer secures servers D. Customer encrypts data, Customer secures servers

Correct Answer: B Explanation: Customers enable encryption for their data, while AWS secures physical infrastructure.

1109) A global e‑commerce company wants to expand into South America. They need low‑latency content delivery, compliance with local regulations, and workforce training for new teams. Which combination of AWS concepts applies? A. Edge Locations + CAF Governance + CAF People B. Regions + Well‑Architected Reliability + Reserved Instances C. Outposts + CAF Business + Spot Instances D. Wavelength + CAF Security + Savings Plans

Correct Answer: A Explanation: Edge Locations reduce latency, Governance ensures compliance, and People covers workforce training.

1110) A startup wants to minimize costs for predictable EC2 workloads but also run Lambda functions flexibly. Which pricing model best fits this hybrid need? A. On‑Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: D Explanation: Savings Plans apply discounts across EC2, Fargate, and Lambda.

1111) A bank wants to migrate its SQL databases to AWS with minimal downtime and track progress across multiple migration tools. Which services should they use together? A. AWS DMS + AWS Migration Hub B. AWS SMS + AWS Snowball C. AWS Direct Connect + AWS VPN D. AWS Outposts + AWS Wavelength

Correct Answer: A Explanation: DMS migrates databases, Migration Hub tracks migration progress.

1112) A media company wants to stream video globally. They need caching near users, redundancy across AZs, and proactive cost optimization. Which combination applies? A. Edge Locations + High Availability + Trusted Advisor B. Regions + CAF People + Reserved Instances C. Outposts + CAF Governance + Spot Instances D. Wavelength + Security pillar + Savings Plans

Correct Answer: A Explanation: Edge Locations cache content, AZs provide redundancy, Trusted Advisor gives cost optimization recommendations.

1113) A government agency wants to run AWS services on‑premises for compliance reasons, while also ensuring workloads are secure. Which combination applies? A. AWS Outposts + CAF Security B. AWS Snowball + CAF People C. AWS Wavelength + Reliability pillar D. AWS Direct Connect + CAF Business

Correct Answer: A Explanation: Outposts extends AWS infrastructure on‑premises, CAF Security ensures compliance.

1114) A startup wants agility to experiment quickly, but also needs to monitor workloads and evolve operational procedures. Which cloud benefit and Well‑Architected pillar apply? A. Agility + Operational Excellence B. Scalability + Reliability C. Elasticity + Security D. Fault Tolerance + Cost Optimization

Correct Answer: A Explanation: Agility enables rapid experimentation, Operational Excellence emphasizes monitoring and evolving procedures.

1115) A bank wants a dedicated, high‑bandwidth connection to AWS, but also encrypted tunnels for backup connectivity. Which services should they use together? A. AWS Direct Connect + AWS VPN B. AWS Transit Gateway + VPC Peering C. AWS Cloud WAN + Outposts D. AWS Snowball + SMS

Correct Answer: A Explanation: Direct Connect provides dedicated connectivity, VPN provides encrypted backup tunnels.

1116) A university wants to train staff on cloud adoption, align IT strategy with business outcomes, and ensure compliance. Which CAF perspectives apply together? A. People + Business + Governance B. Platform + Security + Operations C. Business + Security + People D. Governance + Operations + Platform

Correct Answer: A Explanation: People covers training, Business aligns IT strategy, Governance ensures compliance.

1117) A company wants to migrate petabytes of data securely to AWS without internet, and also run compute workloads in disconnected environments. Which services apply? A. AWS Snowball + AWS Snowball Edge B. Outposts + Wavelength C. DMS + Migration Hub D. Direct Connect + VPN

Correct Answer: A Explanation: Snowball transfers large datasets, Snowball Edge provides compute in disconnected environments.

1118) A customer wants workloads resilient to component failures and secure data at rest. Which Well‑Architected pillars apply together? A. Reliability + Security B. Cost Optimization + Performance Efficiency C. Operational Excellence + Security D. Reliability + Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Security protects data.

1119) A company wants alerts when costs exceed thresholds and detection of unusual spending patterns. Which services apply together? A. AWS Budgets + AWS Cost Anomaly Detection B. Cost Explorer + CUR C. Trusted Advisor + Artifact D. Organizations + Config

Correct Answer: A Explanation: Budgets provides alerts, Cost Anomaly Detection identifies unusual spending.

1120) A telecom provider wants ultra‑low latency applications over 5G. Which AWS service applies? A. AWS Wavelength B. Outposts C. Snowball Edge D. Migration Hub

Correct Answer: A Explanation: Wavelength integrates AWS services into 5G networks.

1121) A company wants workloads easy to manage and maintain, while also minimizing costs. Which Well‑Architected pillars apply together? A. Operational Excellence + Cost Optimization B. Security + Reliability C. Performance Efficiency + Security D. Reliability + Operational Excellence

Correct Answer: A Explanation: Operational Excellence ensures manageability, Cost Optimization reduces costs.

1122) A customer wants to migrate servers automatically and track migration progress. Which services apply together? A. AWS SMS + AWS Migration Hub B. DMS + Snowball C. Outposts + Wavelength D. Direct Connect + VPN

Correct Answer: A Explanation: SMS automates server migration, Migration Hub tracks progress.

1123) A company wants to democratize advanced technologies like ML, while ensuring workloads meet performance goals. Which Well‑Architected pillar applies? A. Performance Efficiency B. Security C. Reliability D. Cost Optimization

Correct Answer: A Explanation: Performance Efficiency emphasizes democratizing advanced technologies and optimizing performance.

1124) A customer wants AWS services on‑premises for compliance, while extending IoT services to edge devices. Which services apply together? A. Outposts + IoT Greengrass B. Snowball Edge + DMS C. Wavelength + SMS D. Migration Hub + Cloud WAN

Correct Answer: A Explanation: Outposts extends AWS infrastructure on‑premises, IoT Greengrass extends IoT services to edge devices.

1125) A company wants workloads to scale globally in minutes, while aligning IT strategy with business outcomes. Which cloud benefit and CAF perspective apply together? A. Global Reach + Business perspective B. Fault Tolerance + Governance perspective C. Elasticity + People perspective D. Scalability + Security perspective

Correct Answer: A Explanation: Global Reach enables worldwide scaling, Business perspective aligns IT with business goals.

1126) A customer wants to reduce costs by eliminating unused resources, while evolving operational procedures frequently. Which Well‑Architected pillars apply together? A. Cost Optimization + Operational Excellence B. Security + Reliability C. Performance Efficiency + Security D. Reliability + Cost Optimization

Correct Answer: A Explanation: Cost Optimization eliminates waste, Operational Excellence evolves procedures.

1127) A company wants to connect multiple VPCs across accounts and regions, while also ensuring compliance and financial accountability. Which services and CAF perspective apply together? A. Transit Gateway + CAF Governance B. VPC Peering + CAF People C. Direct Connect + CAF Business D. Cloud WAN + CAF Security

Correct Answer: A Explanation: Transit Gateway connects multiple VPCs, CAF Governance ensures compliance and accountability.

🌍 Cloud Value Proposition & Economics — Scenario Questions (1128–1147)
1128) A mid‑sized manufacturing company is debating whether to invest in new on‑premises servers or migrate to AWS. The CFO argues that AWS allows them to avoid large upfront capital expenditures and instead pay only for what they use. Which cloud economic principle is the CFO highlighting? A. Scalability B. Operational Expenditure (OpEx) model C. Fault Tolerance D. Elasticity

Correct Answer: B Explanation: AWS shifts spending from CapEx to OpEx, reducing upfront costs and aligning expenses with usage.

1129) A global NGO wants to expand its donation platform to multiple continents. They need to deploy quickly, scale during fundraising events, and minimize costs when demand is low. Which combination of cloud benefits applies? A. Agility + Elasticity + Cost Optimization B. Fault Tolerance + Governance + Reserved Instances C. Reliability + Security + Savings Plans D. Scalability + Performance Efficiency + Spot Instances

Correct Answer: A Explanation: Agility enables rapid deployment, elasticity scales up/down with demand, and cost optimization reduces waste.

1130) A retail chain is considering AWS migration. Executives ask how cloud adoption improves time‑to‑market for new applications compared to traditional IT procurement. Which cloud value proposition is most relevant? A. Fault Tolerance B. Agility C. Reliability D. Security

Correct Answer: B Explanation: Agility allows rapid experimentation and faster deployment compared to lengthy hardware procurement cycles.

1131) A financial services firm wants to ensure workloads remain operational during hardware failures, while also scaling globally in minutes. Which cloud benefits apply together? A. Fault Tolerance + Global Reach B. Elasticity + Security C. Scalability + Cost Optimization D. Reliability + Agility

Correct Answer: A Explanation: Fault tolerance ensures resilience, while global reach enables worldwide scaling.

1132) A startup is pitching investors on its AWS adoption strategy. They emphasize that AWS allows them to experiment quickly, fail fast, and pivot without heavy sunk costs. Which cloud benefit is being emphasized? A. Fault Tolerance B. Agility C. Scalability D. Security

Correct Answer: B Explanation: Agility enables rapid experimentation and innovation without heavy upfront investment.

1133) A government agency wants to justify AWS adoption. They highlight that AWS provides compliance certifications, secure infrastructure, and shared responsibility for physical security. Which cloud value proposition is emphasized? A. Security and Compliance B. Scalability C. Elasticity D. Cost Optimization

Correct Answer: A Explanation: AWS provides compliance programs and secures infrastructure, while customers secure workloads.

1134) A media company wants to stream live sports globally. They need low latency, redundancy, and the ability to scale during peak events. Which cloud benefits apply? A. Global Reach + High Availability + Elasticity B. Fault Tolerance + Governance + Reserved Instances C. Security + Cost Optimization + Spot Instances D. Agility + Performance Efficiency + Savings Plans

Correct Answer: A Explanation: Global reach ensures worldwide access, high availability ensures redundancy, elasticity scales during demand spikes.

1135) A university is migrating its learning management system to AWS. Administrators want to know how AWS reduces operational overhead compared to managing on‑premises servers. Which cloud value proposition applies? A. Managed Services B. Fault Tolerance C. Elasticity D. Scalability

Correct Answer: A Explanation: Managed services reduce operational overhead by offloading infrastructure management to AWS.

1136) A logistics company wants to expand into Asia. They need to deploy workloads in new regions quickly, while ensuring compliance with local regulations. Which combination applies? A. Global Reach + CAF Governance perspective B. Elasticity + CAF People perspective C. Fault Tolerance + CAF Security perspective D. Scalability + CAF Platform perspective

Correct Answer: A Explanation: Global reach enables rapid deployment worldwide, Governance ensures compliance.

1137) A healthcare provider wants to ensure workloads can recover quickly from failures, while also protecting patient data at rest and in transit. Which Well‑Architected pillars apply together? A. Reliability + Security B. Cost Optimization + Performance Efficiency C. Operational Excellence + Security D. Reliability + Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Security protects sensitive data.

1138) A startup wants to minimize costs by eliminating unused resources, while also evolving operational procedures frequently. Which Well‑Architected pillars apply together? A. Cost Optimization + Operational Excellence B. Security + Reliability C. Performance Efficiency + Security D. Reliability + Cost Optimization

Correct Answer: A Explanation: Cost Optimization eliminates waste, Operational Excellence evolves procedures.

1139) A bank wants to justify AWS adoption to regulators. They highlight that AWS provides compliance certifications, while the bank configures IAM and encryption. Which model is being described? A. Shared Responsibility Model B. Cloud Adoption Framework C. Well‑Architected Framework D. Pricing Model

Correct Answer: A Explanation: AWS secures infrastructure and compliance, customers secure workloads and data.

1140) A retail company wants to reduce costs for steady‑state workloads by committing to usage, but also run flexible serverless workloads. Which pricing model applies? A. Reserved Instances B. Spot Instances C. Savings Plans D. On‑Demand

Correct Answer: C Explanation: Savings Plans provide discounts across EC2 and serverless services like Lambda.

1141) A telecom provider wants to deliver ultra‑low latency applications over 5G networks. Which AWS service applies? A. AWS Wavelength B. AWS Outposts C. AWS Snowball Edge D. AWS Migration Hub

Correct Answer: A Explanation: Wavelength integrates AWS services into 5G networks for ultra‑low latency.

1142) A company wants to connect multiple VPCs across accounts and regions, while ensuring compliance and financial accountability. Which services and CAF perspective apply together? A. Transit Gateway + CAF Governance B. VPC Peering + CAF People C. Direct Connect + CAF Business D. Cloud WAN + CAF Security

Correct Answer: A Explanation: Transit Gateway connects VPCs, Governance ensures compliance and accountability.

1143) A startup wants to pitch AWS adoption to investors. They emphasize that AWS allows them to scale globally in minutes, align IT with business outcomes, and minimize upfront costs. Which combination applies? A. Global Reach + CAF Business perspective + OpEx model B. Fault Tolerance + CAF Governance + Reserved Instances C. Elasticity + CAF People + Spot Instances D. Scalability + CAF Security + Savings Plans

Correct Answer: A Explanation: Global reach enables worldwide scaling, Business perspective aligns IT with outcomes, OpEx reduces upfront costs.

1144) A healthcare company wants to run AWS services on‑premises for compliance, while extending IoT services to edge devices. Which services apply together? A. Outposts + IoT Greengrass B. Snowball Edge + DMS C. Wavelength + SMS D. Migration Hub + Cloud WAN

Correct Answer: A Explanation: Outposts extends AWS infrastructure on‑premises, IoT Greengrass extends IoT services to edge devices.

1145) A university wants to justify AWS adoption. They highlight that AWS enables rapid experimentation, reduces upfront costs, and provides compliance certifications. Which combination applies? A. Agility + OpEx model + Security B. Fault Tolerance + Governance + Reserved Instances C. Elasticity + CAF People + Spot Instances D. Scalability + CAF Security + Savings Plans

Correct Answer: A Explanation: Agility enables experimentation, OpEx reduces upfront costs, Security ensures compliance.

1146) A company wants to ensure workloads are easy to manage, monitor, and maintain, while also minimizing costs. Which Well‑Architected pillars apply together? A. Operational Excellence + Cost Optimization B. Security + Reliability C. Performance Efficiency + Security D. Reliability + Operational Excellence

Correct Answer: A Explanation: Operational Excellence ensures manageability, Cost Optimization reduces costs.

1147) A global NGO wants to expand its donation platform. They emphasize agility to deploy quickly, elasticity to scale during fundraising events, and governance to ensure compliance. Which combination applies? A. Agility + Elasticity + CAF Governance B. Fault Tolerance + CAF Security + Reserved Instances C. Scalability + CAF People + Spot Instances D. Reliability + CAF Business + Savings Plans

Correct Answer: A Explanation: Agility enables rapid deployment, elasticity scales with demand, Governance ensures compliance.


Longer Scenario‑Based CCP Questions (Short Response Options)
1188) A hospital is migrating its patient monitoring system to AWS. They use EC2 for application servers, RDS for patient databases, and S3 for backups. Regulators ask who is responsible for patching the EC2 operating system, encrypting S3 data, and securing the physical servers hosting RDS. A. AWS B. Customer C. Both D. Third‑party vendor

Correct Answer: B Explanation: Customers patch EC2 OS and encrypt S3; AWS secures physical infrastructure.

1189) A global NGO wants to expand its donation platform into South America. They need low‑latency content delivery for donors, compliance with local regulations, and redundancy across multiple data centers. A. Regions B. Availability Zones C. Edge Locations D. Outposts

Correct Answer: C Explanation: Edge Locations via CloudFront reduce latency; AZs provide redundancy.

1190) A fintech startup wants to minimize costs for predictable EC2 workloads, run Lambda functions flexibly, and receive proactive cost optimization recommendations. A. On‑Demand B. Reserved Instances C. Spot Instances D. Savings Plans

Correct Answer: D Explanation: Savings Plans cover EC2 and Lambda; Trusted Advisor provides optimization.

1191) A media company wants to stream live sports globally. They need caching near users, redundancy across AZs, and elasticity during peak demand. A. Edge Locations B. Regions C. Outposts D. Wavelength

Correct Answer: A Explanation: Edge Locations cache content; AZs provide redundancy; elasticity scales workloads.

1192) A government agency wants AWS services on‑premises for compliance, while also ensuring workloads are secure and monitored. A. Outposts B. Snowball C. Wavelength D. Migration Hub

Correct Answer: A Explanation: Outposts extends AWS infrastructure on‑premises for compliance.

1193) A startup wants agility to experiment quickly, fail fast, and pivot without heavy sunk costs. A. Fault Tolerance B. Agility C. Reliability D. Security

Correct Answer: B

1194) A bank wants workloads resilient to component failures and secure customer data at rest. A. Reliability + Security B. Cost Optimization + Performance Efficiency C. Operational Excellence + Security D. Reliability + Cost Optimization

Correct Answer: A

1195) A company wants alerts when costs exceed thresholds and detection of unusual spending patterns. A. Budgets + Cost Anomaly Detection B. Cost Explorer + CUR C. Trusted Advisor + Artifact D. Organizations + Config

Correct Answer: A

1196) A telecom provider wants ultra‑low latency applications delivered over 5G networks. A. Wavelength B. Outposts C. Snowball Edge D. Migration Hub

Correct Answer: A

1197) A company wants workloads easy to manage, monitor, and maintain, while evolving operational procedures frequently. A. Operational Excellence B. Security C. Reliability D. Cost Optimization

Correct Answer: A

1198) A customer wants to migrate servers automatically and track migration progress across multiple tools. A. SMS + Migration Hub B. DMS + Snowball C. Outposts + Wavelength D. Direct Connect + VPN

Correct Answer: A

1199) A company wants to democratize advanced technologies like machine learning, while ensuring workloads meet performance goals. A. Performance Efficiency B. Security C. Reliability D. Cost Optimization

Correct Answer: A

1200) A customer wants AWS services on‑premises for compliance, while extending IoT services to edge devices. A. Outposts + IoT Greengrass B. Snowball Edge + DMS C. Wavelength + SMS D. Migration Hub + Cloud WAN

Correct Answer: A

1201) A company wants workloads to scale globally in minutes, while aligning IT strategy with business outcomes. A. Global Reach + Business perspective B. Fault Tolerance + Governance perspective C. Elasticity + People perspective D. Scalability + Security perspective

Correct Answer: A

1202) A customer wants to reduce costs by eliminating unused resources, while also ensuring workloads meet business goals. A. Cost Optimization B. Security C. Reliability D. Operational Excellence

Correct Answer: A

1203) A company wants to connect multiple VPCs across accounts and regions through a central hub. A. Transit Gateway B. VPC Peering C. Direct Connect D. Cloud WAN

Correct Answer: A

1204) A startup wants to minimize upfront costs and shift to pay‑as‑you‑go pricing. A. CapEx model B. OpEx model C. Fault Tolerance D. Elasticity

Correct Answer: B

1205) A university wants to justify AWS adoption by highlighting agility, reduced upfront costs, and compliance certifications. A. Agility + OpEx + Security B. Fault Tolerance + Governance + Reserved Instances C. Elasticity + People + Spot Instances D. Scalability + Security + Savings Plans

Correct Answer: A

1206) A company wants to stream video globally with caching near users, redundancy across AZs, and elasticity during demand spikes. A. Edge Locations B. Regions C. Outposts D. Wavelength

Correct Answer: A

1207) A healthcare provider wants compliance documentation for audits to prove workloads meet regulatory requirements. A. Artifact B. Config C. Inspector D. Security Hub

Correct Answer: A


🏗️ Well‑Architected Framework — Comprehensive Scenarios
1268) A healthcare provider is designing a telemedicine platform. They want workloads that can withstand hardware failures, automatically recover, and continue serving patients without disruption. Which Well‑Architected pillar should guide their design? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: B Explanation: The Reliability pillar ensures workloads can recover from failures and remain available to users.

1269) A global retailer is preparing for Black Friday sales. They need to scale resources rapidly during peak demand, ensure applications remain responsive, and minimize costs when traffic subsides. Which pillar applies? A. Operational Excellence B. Performance Efficiency C. Security D. Cost Optimization

Correct Answer: B Explanation: Performance Efficiency emphasizes elasticity and scaling resources to meet workload demands efficiently.

1270) A financial services firm must protect sensitive customer data at rest and in transit, enforce strict access controls, and enable traceability through logging. Which pillar applies? A. Security B. Reliability C. Cost Optimization D. Operational Excellence

Correct Answer: A Explanation: The Security pillar ensures workloads are protected through encryption, IAM, and monitoring.

1271) A startup wants to reduce expenses by eliminating unused resources, right‑sizing workloads, and leveraging pricing models that match usage patterns. Which pillar applies? A. Cost Optimization B. Reliability C. Security D. Performance Efficiency

Correct Answer: A Explanation: Cost Optimization focuses on efficient resource use and minimizing waste.

1272) A university is migrating its learning management system to AWS. Administrators want workloads that are easy to manage, monitor, and evolve as requirements change. Which pillar applies? A. Operational Excellence B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: A Explanation: Operational Excellence emphasizes monitoring, automation, and evolving procedures for continuous improvement.

1273) A logistics company wants to design workloads that anticipate failure, recover quickly, and maintain service continuity during outages. Which pillar applies? A. Reliability B. Security C. Cost Optimization D. Operational Excellence

Correct Answer: A Explanation: Reliability ensures workloads can recover from component failures and remain operational.

1274) A media company wants to democratize advanced technologies like machine learning, while ensuring workloads meet performance goals across diverse regions. Which pillar applies? A. Performance Efficiency B. Security C. Reliability D. Cost Optimization

Correct Answer: A Explanation: Performance Efficiency emphasizes using advanced technologies and optimizing resources for workload demands.

1275) A government agency wants secure workload design, proactive security measures, and compliance with regulations. Which pillar applies? A. Security B. Reliability C. Cost Optimization D. Operational Excellence

Correct Answer: A Explanation: The Security pillar ensures workloads are designed with proactive security and compliance controls.

1276) A startup wants agility to experiment quickly, deploy new features, and evolve operational procedures frequently. Which pillar applies? A. Operational Excellence B. Reliability C. Security D. Cost Optimization

Correct Answer: A Explanation: Operational Excellence emphasizes agility, monitoring, and evolving procedures to improve workloads.

1277) A bank wants workloads resilient to component failures, while also minimizing costs by eliminating unused resources. Which combination of pillars applies? A. Reliability and Cost Optimization B. Security and Performance Efficiency C. Operational Excellence and Security D. Performance Efficiency and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience to failures, while Cost Optimization reduces expenses through efficient resource use.

Well‑Architected Framework — Comprehensive Scenarios
1268) A healthcare provider is designing a telemedicine platform. They want workloads that can withstand hardware failures, automatically recover, and continue serving patients without disruption. Which Well‑Architected pillar should guide their design? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: B Explanation: The Reliability pillar ensures workloads can recover from failures and remain available to users.

1269) A global retailer is preparing for Black Friday sales. They need to scale resources rapidly during peak demand, ensure applications remain responsive, and minimize costs when traffic subsides. Which pillar applies? A. Operational Excellence B. Performance Efficiency C. Security D. Cost Optimization

Correct Answer: B Explanation: Performance Efficiency emphasizes elasticity and scaling resources to meet workload demands efficiently.

1270) A financial services firm must protect sensitive customer data at rest and in transit, enforce strict access controls, and enable traceability through logging. Which pillar applies? A. Security B. Reliability C. Cost Optimization D. Operational Excellence

Correct Answer: A Explanation: The Security pillar ensures workloads are protected through encryption, IAM, and monitoring.

1271) A startup wants to reduce expenses by eliminating unused resources, right‑sizing workloads, and leveraging pricing models that match usage patterns. Which pillar applies? A. Cost Optimization B. Reliability C. Security D. Performance Efficiency

Correct Answer: A Explanation: Cost Optimization focuses on efficient resource use and minimizing waste.

1272) A university is migrating its learning management system to AWS. Administrators want workloads that are easy to manage, monitor, and evolve as requirements change. Which pillar applies? A. Operational Excellence B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: A Explanation: Operational Excellence emphasizes monitoring, automation, and evolving procedures for continuous improvement.

1273) A logistics company wants to design workloads that anticipate failure, recover quickly, and maintain service continuity during outages. Which pillar applies? A. Reliability B. Security C. Cost Optimization D. Operational Excellence

Correct Answer: A Explanation: Reliability ensures workloads can recover from component failures and remain operational.

1274) A media company wants to democratize advanced technologies like machine learning, while ensuring workloads meet performance goals across diverse regions. Which pillar applies? A. Performance Efficiency B. Security C. Reliability D. Cost Optimization

Correct Answer: A Explanation: Performance Efficiency emphasizes using advanced technologies and optimizing resources for workload demands.

1275) A government agency wants secure workload design, proactive security measures, and compliance with regulations. Which pillar applies? A. Security B. Reliability C. Cost Optimization D. Operational Excellence

Correct Answer: A Explanation: The Security pillar ensures workloads are designed with proactive security and compliance controls.

1276) A startup wants agility to experiment quickly, deploy new features, and evolve operational procedures frequently. Which pillar applies? A. Operational Excellence B. Reliability C. Security D. Cost Optimization

Correct Answer: A Explanation: Operational Excellence emphasizes agility, monitoring, and evolving procedures to improve workloads.

1277) A bank wants workloads resilient to component failures, while also minimizing costs by eliminating unused resources. Which combination of pillars applies? A. Reliability and Cost Optimization B. Security and Performance Efficiency C. Operational Excellence and Security D. Performance Efficiency and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience to failures, while Cost Optimization reduces expenses through efficient resource use.

✅ That’s 10 comprehensive scenarios (1268–1277) focused on the Well‑Architected Framework.

Next, we can continue with CAF perspective scenarios (1278–1287) in the same style, so you practice holding organizational and governance details in mind. Would you like me to roll straight into those?

provide more of the waf (30)
Perfect, Leonard — let’s expand with 30 comprehensive scenario‑based questions focused entirely on the AWS Well‑Architected Framework (WAF). Each scenario is longer and layered, with clear answer choices (A–D) and explanations. This will give you a deep training set to stretch your concentration span.

🏗️ Well‑Architected Framework — 30 Scenario Questions (1278–1307)
1278) A hospital is deploying a patient monitoring system. They want workloads that can withstand hardware failures, automatically recover, and continue serving patients without disruption. Which pillar applies? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: B Explanation: Reliability ensures workloads can recover from failures and remain available.

1279) A global retailer is preparing for Black Friday. They need to scale resources rapidly during peak demand, ensure applications remain responsive, and minimize costs when traffic subsides. Which pillar applies? A. Operational Excellence B. Performance Efficiency C. Security D. Cost Optimization

Correct Answer: B Explanation: Performance Efficiency emphasizes elasticity and scaling resources to meet workload demands.

1280) A financial services firm must protect sensitive customer data at rest and in transit, enforce strict access controls, and enable traceability through logging. Which pillar applies? A. Security B. Reliability C. Cost Optimization D. Operational Excellence

Correct Answer: A Explanation: Security ensures workloads are protected through encryption, IAM, and monitoring.

1281) A startup wants to reduce expenses by eliminating unused resources, right‑sizing workloads, and leveraging pricing models that match usage patterns. Which pillar applies? A. Cost Optimization B. Reliability C. Security D. Performance Efficiency

Correct Answer: A Explanation: Cost Optimization focuses on efficient resource use and minimizing waste.

1282) A university is migrating its learning management system to AWS. Administrators want workloads that are easy to manage, monitor, and evolve as requirements change. Which pillar applies? A. Operational Excellence B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: A Explanation: Operational Excellence emphasizes monitoring, automation, and evolving procedures.

1283) A logistics company wants workloads that anticipate failure, recover quickly, and maintain service continuity during outages. Which pillar applies? A. Reliability B. Security C. Cost Optimization D. Operational Excellence

Correct Answer: A Explanation: Reliability ensures workloads can recover from component failures.

1284) A media company wants to democratize advanced technologies like machine learning, while ensuring workloads meet performance goals across diverse regions. Which pillar applies? A. Performance Efficiency B. Security C. Reliability D. Cost Optimization

Correct Answer: A Explanation: Performance Efficiency emphasizes using advanced technologies and optimizing resources.

1285) A government agency wants secure workload design, proactive security measures, and compliance with regulations. Which pillar applies? A. Security B. Reliability C. Cost Optimization D. Operational Excellence

Correct Answer: A Explanation: Security ensures workloads are designed with proactive security and compliance controls.

1286) A startup wants agility to experiment quickly, deploy new features, and evolve operational procedures frequently. Which pillar applies? A. Operational Excellence B. Reliability C. Security D. Cost Optimization

Correct Answer: A Explanation: Operational Excellence emphasizes agility, monitoring, and evolving procedures.

1287) A bank wants workloads resilient to component failures, while also minimizing costs by eliminating unused resources. Which combination applies? A. Reliability and Cost Optimization B. Security and Performance Efficiency C. Operational Excellence and Security D. Performance Efficiency and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Cost Optimization reduces expenses.

1288) A healthcare provider wants to ensure workloads can recover quickly from failures, while also protecting patient data. Which pillars apply? A. Reliability and Security B. Cost Optimization and Performance Efficiency C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Security protects sensitive data.

1289) A startup wants to minimize costs while ensuring workloads meet performance goals. Which pillars apply? A. Cost Optimization and Performance Efficiency B. Security and Reliability C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Cost Optimization eliminates waste, Performance Efficiency ensures workloads meet performance goals.

1290) A company wants workloads that are easy to manage and maintain, while also minimizing costs. Which pillars apply? A. Operational Excellence and Cost Optimization B. Security and Reliability C. Performance Efficiency and Security D. Reliability and Operational Excellence

Correct Answer: A Explanation: Operational Excellence ensures manageability, Cost Optimization reduces expenses.

1291) A university wants workloads that can scale globally in minutes, while also protecting data at rest. Which pillars apply? A. Performance Efficiency and Security B. Reliability and Cost Optimization C. Operational Excellence and Security D. Security and Cost Optimization

Correct Answer: A Explanation: Performance Efficiency ensures scalability, Security protects data.

1292) A logistics company wants to monitor workloads, automate responses, and evolve operational procedures. Which pillar applies? A. Operational Excellence B. Reliability C. Security D. Cost Optimization

Correct Answer: A Explanation: Operational Excellence emphasizes monitoring and automation.

1293) A bank wants to ensure workloads remain operational during component failures, while also protecting sensitive customer data. Which pillars apply? A. Reliability and Security B. Cost Optimization and Performance Efficiency C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Security protects sensitive data.

1294) A startup wants to experiment quickly with new ideas, while evolving operational procedures frequently. Which pillar applies? A. Operational Excellence B. Reliability C. Security D. Cost Optimization

Correct Answer: A Explanation: Operational Excellence emphasizes agility and evolving procedures.

1295) A government agency wants workloads that are secure, compliant, and auditable. Which pillar applies? A. Security B. Reliability C. Cost Optimization D. Operational Excellence

Correct Answer: A Explanation: Security ensures compliance and auditability.

1296) A media company wants workloads optimized for performance across diverse regions, while also minimizing costs. Which pillars apply? A. Performance Efficiency and Cost Optimization B. Security and Reliability C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Performance Efficiency ensures optimized resources, Cost Optimization reduces expenses.

1297) A university wants workloads that are easy to monitor, automate, and evolve. Which pillar applies? A. Operational Excellence B. Reliability C. Security D. Cost Optimization

Correct Answer: A Explanation: Operational Excellence emphasizes monitoring and automation.

1298) A startup wants workloads resilient to failures, while also optimized for performance. Which pillars apply? A. Reliability and Performance Efficiency B. Security and Cost Optimization C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Performance Efficiency ensures optimized performance.

1299) A healthcare provider wants workloads secure at rest and in transit, while also easy to monitor. Which pillars apply? A. Security and Operational Excellence B. Reliability and Cost Optimization C. Performance Efficiency and Security D. Operational Excellence and Cost Optimization

Correct Answer: A Explanation: Security protects data, Operational Excellence ensures monitoring.

1300) A logistics company wants workloads that anticipate failure, recover quickly, and minimize costs. Which pillars apply? A. Reliability and Cost Optimization B. Security and Performance Efficiency C. Operational Excellence and Security D. Performance Efficiency and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Cost Optimization reduces expenses.

1301) A bank wants workloads secure, compliant, and optimized for performance. Which pillars apply? A. Security and Performance Efficiency B. Reliability and Cost Optimization C. Operational Excellence and Security D. Performance Efficiency and Cost Optimization

Correct Answer: A Explanation: Security ensures compliance, Performance Efficiency ensures optimized performance.

1302) A startup wants workloads easy to manage, while also resilient to failures. Which pillars apply? A. Operational Excellence and Reliability B. Security and Cost Optimization C. Performance Efficiency and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Operational Excellence ensures manageability, Reliability ensures resilience.

1303) A government agency wants workloads secure, compliant, and resilient to failures. Which pillars apply? A. Security and Reliability B. Cost Optimization and Performance Efficiency C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Security ensures compliance, Reliability ensures resilience.


Well‑Architected Framework — Comprehensive Scenarios (1305–1334)
1305) A fintech company is designing a payment processing system. They want to ensure transactions remain available even if one Availability Zone fails, and they also want automated backups to restore quickly. Which pillar applies? A. Security B. Reliability C. Performance Efficiency D. Cost Optimization

Correct Answer: B Explanation: Reliability ensures workloads can recover from failures and maintain availability.

1306) A university research lab wants to run machine learning workloads. They need to use GPU instances efficiently, scale experiments across regions, and adopt new technologies quickly. Which pillar applies? A. Performance Efficiency B. Security C. Reliability D. Cost Optimization

Correct Answer: A Explanation: Performance Efficiency emphasizes using advanced technologies and optimizing resources for workload demands.

1307) A healthcare provider must comply with HIPAA regulations. They want to encrypt patient data, enforce IAM policies, and monitor API calls. Which pillar applies? A. Security B. Reliability C. Cost Optimization D. Operational Excellence

Correct Answer: A Explanation: Security ensures compliance through encryption, IAM, and monitoring.

1308) A startup wants to reduce costs by eliminating idle EC2 instances, right‑sizing workloads, and using Spot Instances for batch jobs. Which pillar applies? A. Cost Optimization B. Reliability C. Security D. Performance Efficiency

Correct Answer: A Explanation: Cost Optimization reduces expenses by eliminating waste and leveraging pricing models.

1309) A logistics company wants to monitor workloads, automate incident responses, and evolve operational procedures as business needs change. Which pillar applies? A. Operational Excellence B. Reliability C. Security D. Cost Optimization

Correct Answer: A Explanation: Operational Excellence emphasizes monitoring, automation, and evolving procedures.

1310) A bank wants workloads resilient to component failures, while also ensuring sensitive customer data is encrypted. Which pillars apply? A. Reliability and Security B. Cost Optimization and Performance Efficiency C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Security protects sensitive data.

1311) A media company wants workloads optimized for performance across diverse regions, while also minimizing costs. Which pillars apply? A. Performance Efficiency and Cost Optimization B. Security and Reliability C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Performance Efficiency ensures optimized resources, Cost Optimization reduces expenses.

1312) A government agency wants workloads secure, compliant, and auditable, while also resilient to failures. Which pillars apply? A. Security and Reliability B. Cost Optimization and Performance Efficiency C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Security ensures compliance and auditability, Reliability ensures resilience.

1313) A startup wants workloads easy to manage, while also resilient to failures. Which pillars apply? A. Operational Excellence and Reliability B. Security and Cost Optimization C. Performance Efficiency and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Operational Excellence ensures manageability, Reliability ensures resilience.

1314) A university wants workloads that can scale globally in minutes, while also protecting data at rest and in transit. Which pillars apply? A. Performance Efficiency and Security B. Reliability and Cost Optimization C. Operational Excellence and Security D. Security and Cost Optimization

Correct Answer: A Explanation: Performance Efficiency ensures scalability, Security protects data.

1315) A logistics company wants workloads that anticipate failure, recover quickly, and minimize costs by eliminating unused resources. Which pillars apply? A. Reliability and Cost Optimization B. Security and Performance Efficiency C. Operational Excellence and Security D. Performance Efficiency and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Cost Optimization reduces expenses.

1316) A healthcare provider wants workloads secure at rest and in transit, while also easy to monitor and evolve. Which pillars apply? A. Security and Operational Excellence B. Reliability and Cost Optimization C. Performance Efficiency and Security D. Operational Excellence and Cost Optimization

Correct Answer: A Explanation: Security protects data, Operational Excellence ensures monitoring and evolution.

1317) A bank wants workloads secure, compliant, and optimized for performance across multiple regions. Which pillars apply? A. Security and Performance Efficiency B. Reliability and Cost Optimization C. Operational Excellence and Security D. Performance Efficiency and Cost Optimization

Correct Answer: A Explanation: Security ensures compliance, Performance Efficiency ensures optimized performance.

1318) A startup wants workloads resilient to failures, while also optimized for performance. Which pillars apply? A. Reliability and Performance Efficiency B. Security and Cost Optimization C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Performance Efficiency ensures optimized performance.

1319) A government agency wants workloads secure, compliant, and auditable, while also easy to manage. Which pillars apply? A. Security and Operational Excellence B. Reliability and Cost Optimization C. Performance Efficiency and Security D. Operational Excellence and Cost Optimization

Correct Answer: A Explanation: Security ensures compliance, Operational Excellence ensures manageability.

1320) A media company wants workloads optimized for performance, while also resilient to failures. Which pillars apply? A. Performance Efficiency and Reliability B. Security and Cost Optimization C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Performance Efficiency ensures optimized resources, Reliability ensures resilience.

1321) A university wants workloads easy to monitor, automate, and evolve, while also minimizing costs. Which pillars apply? A. Operational Excellence and Cost Optimization B. Security and Reliability C. Performance Efficiency and Security D. Reliability and Operational Excellence

Correct Answer: A Explanation: Operational Excellence ensures monitoring and automation, Cost Optimization reduces expenses.

1322) A logistics company wants workloads resilient to failures, while also secure and compliant with regulations. Which pillars apply? A. Reliability and Security B. Cost Optimization and Performance Efficiency C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Security ensures compliance.

1323) A healthcare provider wants workloads secure, compliant, and optimized for performance. Which pillars apply? A. Security and Performance Efficiency B. Reliability and Cost Optimization C. Operational Excellence and Security D. Performance Efficiency and Cost Optimization

Correct Answer: A Explanation: Security ensures compliance, Performance Efficiency ensures optimized performance.

1324) A startup wants workloads easy to manage, while also optimized for performance. Which pillars apply? A. Operational Excellence and Performance Efficiency B. Security and Reliability C. Performance Efficiency and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Operational Excellence ensures manageability, Performance Efficiency ensures optimized performance.

1325) A government agency wants workloads secure, compliant, and resilient to failures, while also minimizing costs. Which pillars apply? A. Security, Reliability, and Cost Optimization B. Cost Optimization and Performance Efficiency C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Security ensures compliance, Reliability ensures resilience, Cost Optimization reduces expenses.

1326) A media company wants workloads optimized for performance, while also easy to monitor and evolve. Which pillars apply? A. Performance Efficiency and Operational Excellence B. Security and Reliability C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Performance Efficiency ensures optimized resources, Operational Excellence ensures monitoring and evolution.

1327) A university wants workloads resilient to failures, while also secure and compliant with regulations. Which pillars apply? A. Reliability and Security B. Cost Optimization and Performance Efficiency C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Reliability ensures resilience, Security ensures compliance.

1328) A logistics company wants workloads easy to manage, while also minimizing costs and resilient to failures. Which pillars apply? A. Operational Excellence, Cost Optimization, and Reliability B. Security and Performance Efficiency C. Operational Excellence and Security D. Reliability and Cost Optimization

Correct Answer: A Explanation: Operational Excellence ensures manageability, Cost Optimization reduces expenses, Reliability ensures resilience.

1329) A healthcare provider wants workloads secure, compliant, and optimized for performance, while also easy to monitor. Which pillars apply? A. Security, Performance Efficiency, and Operational Excellence B. Reliability and Cost Optimization C. Operational Excellence and Security D. Performance Efficiency and Cost Optimization

Correct Answer: A Explanation: Security ensures compliance, Performance Efficiency ensures optimized performance, Operational Excellence ensures monitoring


Cloud Adoption Framework (CAF) Scenarios
1335) A university is migrating to AWS. They need to train staff, change organizational culture, and build cloud skills to ensure adoption succeeds. Which CAF perspective applies? A. People B. Business C. Governance D. Operations

Correct Answer: A Explanation: The People perspective focuses on workforce enablement, training, and cultural change during cloud adoption.

1336) A retail company wants to align IT strategy with business outcomes, measure ROI, and ensure cloud adoption supports revenue growth. Which CAF perspective applies? A. Business B. Governance C. Platform D. Security

Correct Answer: A Explanation: The Business perspective ensures IT initiatives deliver measurable business value and align with organizational goals.

1337) A government agency wants compliance, risk management, and accountability during cloud adoption. Which CAF perspective applies? A. Governance B. Business C. Security D. Operations

Correct Answer: A Explanation: Governance ensures compliance, accountability, and risk management across cloud initiatives.

1338) A logistics company wants to design and build cloud infrastructure, including networking, compute, and storage. Which CAF perspective applies? A. Platform B. People C. Governance D. Operations

Correct Answer: A Explanation: The Platform perspective focuses on designing and building cloud infrastructure and applications.

1339) A healthcare provider wants secure workload design, proactive security measures, and compliance with regulations. Which CAF perspective applies? A. Security B. Business C. Governance D. Operations

Correct Answer: A Explanation: The Security perspective ensures workloads are designed with proactive security and compliance controls.

1340) A startup wants monitoring, incident management, and continuous improvement during cloud adoption. Which CAF perspective applies? A. Operations B. Business C. Governance D. Platform

Correct Answer: A Explanation: The Operations perspective ensures workloads are monitored and improved continuously.

💰 Cloud Economics & Business Case Scenarios
1341) A manufacturing company is debating whether to buy new servers or migrate to AWS. The CFO argues AWS avoids large upfront capital expenditures and shifts costs to ongoing usage. Which principle applies? A. CapEx model B. OpEx model C. Fault Tolerance D. Elasticity

Correct Answer: B Explanation: AWS shifts spending from CapEx to OpEx, reducing upfront costs and aligning expenses with usage.

1342) A global NGO wants to expand its donation platform. They emphasize rapid deployment, scaling during fundraising events, and minimizing costs when demand is low. Which benefits apply? A. Agility, Elasticity, Cost Optimization B. Fault Tolerance, Governance, Reserved Instances C. Reliability, Security, Savings Plans D. Scalability, Performance Efficiency, Spot Instances

Correct Answer: A Explanation: Agility enables rapid deployment, elasticity scales with demand, and cost optimization reduces waste.

1343) A retail chain wants to improve time‑to‑market for new apps compared to traditional IT procurement. Which cloud benefit applies? A. Fault Tolerance B. Agility C. Reliability D. Security

Correct Answer: B Explanation: Agility allows rapid experimentation and faster deployment compared to lengthy hardware procurement cycles.

1344) A startup pitching investors emphasizes AWS allows them to experiment quickly, fail fast, and pivot without heavy sunk costs. Which cloud benefit applies? A. Fault Tolerance B. Agility C. Scalability D. Security

Correct Answer: B Explanation: Agility enables innovation and rapid iteration without heavy upfront investment.

1345) A government agency highlights AWS compliance certifications and secure infrastructure. Which cloud benefit applies? A. Security and Compliance B. Scalability C. Elasticity D. Cost Optimization

Correct Answer: A Explanation: AWS provides compliance programs and secures infrastructure, while customers secure workloads.

🧾 Billing & Support Plan Scenarios
1346) A startup wants alerts when costs exceed thresholds and detection of unusual spending patterns. Which services apply? A. Budgets and Cost Anomaly Detection B. Cost Explorer and CUR C. Trusted Advisor and Artifact D. Organizations and Config

Correct Answer: A Explanation: Budgets provides alerts, Cost Anomaly Detection identifies unusual spending.

1347) A company wants to analyze historical spending trends and visualize costs across accounts. Which tool applies? A. Cost Explorer B. Budgets C. Trusted Advisor D. Artifact

Correct Answer: A Explanation: Cost Explorer provides detailed cost analysis and visualization.

1348) A business wants compliance documentation for audits. Which AWS service provides this? A. Artifact B. Config C. Inspector D. Security Hub

Correct Answer: A Explanation: Artifact provides compliance reports and audit documentation.

1349) A startup is deciding between AWS Support Plans. They need 24/7 access to Cloud Support Engineers, guidance on architecture, and proactive monitoring. Which plan applies? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: D Explanation: Enterprise Support provides 24/7 access, architectural guidance, and proactive monitoring.


Cloud Adoption Framework (CAF) Scenarios
1350) A multinational bank is adopting AWS. Executives want to ensure IT strategy aligns with business outcomes, measure ROI, and track financial accountability. Which CAF perspective applies? A. Business B. Governance C. Platform D. Operations

Correct Answer: A Explanation: The Business perspective ensures IT initiatives deliver measurable business value and align with organizational goals.

1351) A government agency is migrating sensitive workloads. They need compliance with regulations, risk management, and accountability for cloud adoption decisions. Which CAF perspective applies? A. Governance B. Business C. Security D. People

Correct Answer: A Explanation: Governance ensures compliance, accountability, and risk management.

1352) A logistics company is building a new supply chain system on AWS. They want to design and deploy infrastructure including networking, compute, and storage. Which CAF perspective applies? A. Platform B. People C. Governance D. Operations

Correct Answer: A Explanation: The Platform perspective focuses on designing and building cloud infrastructure.

1353) A healthcare provider wants secure workload design, proactive security measures, and compliance with HIPAA regulations. Which CAF perspective applies? A. Security B. Business C. Governance D. Operations

Correct Answer: A Explanation: The Security perspective ensures workloads are designed with proactive security and compliance controls.

1354) A university wants to train staff, change organizational culture, and build cloud skills to ensure adoption succeeds. Which CAF perspective applies? A. People B. Business C. Governance D. Operations

Correct Answer: A Explanation: The People perspective focuses on workforce enablement and cultural change.

1355) A startup wants monitoring, incident management, and continuous improvement during cloud adoption. Which CAF perspective applies? A. Operations B. Business C. Governance D. Platform

Correct Answer: A Explanation: The Operations perspective ensures workloads are monitored and improved continuously.

💰 Cloud Economics & Business Case Scenarios
1356) A manufacturing company is debating whether to buy new servers or migrate to AWS. The CFO argues AWS avoids large upfront capital expenditures. Which principle applies? A. CapEx model B. OpEx model C. Fault Tolerance D. Elasticity

Correct Answer: B Explanation: AWS shifts spending from CapEx to OpEx, reducing upfront costs.

1357) A global NGO wants to expand its donation platform. They emphasize rapid deployment, scaling during fundraising events, and minimizing costs when demand is low. Which benefits apply? A. Agility, Elasticity, Cost Optimization B. Fault Tolerance, Governance, Reserved Instances C. Reliability, Security, Savings Plans D. Scalability, Performance Efficiency, Spot Instances

Correct Answer: A Explanation: Agility enables rapid deployment, elasticity scales with demand, and cost optimization reduces waste.

1358) A retail chain wants to improve time‑to‑market for new apps compared to traditional IT procurement. Which cloud benefit applies? A. Fault Tolerance B. Agility C. Reliability D. Security

Correct Answer: B Explanation: Agility allows rapid experimentation and faster deployment.

1359) A startup pitching investors emphasizes AWS allows them to experiment quickly, fail fast, and pivot without heavy sunk costs. Which cloud benefit applies? A. Fault Tolerance B. Agility C. Scalability D. Security

Correct Answer: B Explanation: Agility enables innovation and rapid iteration without heavy upfront investment.

1360) A government agency highlights AWS compliance certifications and secure infrastructure. Which cloud benefit applies? A. Security and Compliance B. Scalability C. Elasticity D. Cost Optimization

Correct Answer: A Explanation: AWS provides compliance programs and secures infrastructure.

1361) A media company wants low latency, redundancy, and scaling during peak events. Which benefits apply? A. Global Reach, High Availability, Elasticity B. Fault Tolerance, Governance, Reserved Instances C. Security, Cost Optimization, Spot Instances D. Agility, Performance Efficiency, Savings Plans

Correct Answer: A Explanation: Global Reach ensures worldwide access, High Availability ensures redundancy, Elasticity scales workloads.

🧾 Billing & Support Plan Scenarios
1362) A startup wants alerts when costs exceed thresholds and detection of unusual spending patterns. Which services apply? A. Budgets and Cost Anomaly Detection B. Cost Explorer and CUR C. Trusted Advisor and Artifact D. Organizations and Config

Correct Answer: A Explanation: Budgets provides alerts, Cost Anomaly Detection identifies unusual spending.

1363) A company wants to analyze historical spending trends and visualize costs across accounts. Which tool applies? A. Cost Explorer B. Budgets C. Trusted Advisor D. Artifact

Correct Answer: A Explanation: Cost Explorer provides detailed cost analysis and visualization.

1364) A business wants compliance documentation for audits. Which AWS service provides this? A. Artifact B. Config C. Inspector D. Security Hub

Correct Answer: A Explanation: Artifact provides compliance reports and audit documentation.

1365) A startup is deciding between AWS Support Plans. They need 24/7 access to Cloud Support Engineers, guidance on architecture, and proactive monitoring. Which plan applies? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: D Explanation: Enterprise Support provides 24/7 access, architectural guidance, and proactive monitoring.

1366) A small development team wants low‑cost support with general guidance and business‑hours access to Cloud Support Associates. Which plan applies? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: B Explanation: Developer Support provides business‑hours access and general guidance at low cost.

1367) A mid‑sized company wants production‑level support, 24/7 access to engineers, and guidance on best practices, but not the full Enterprise package. Which plan applies? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: C Explanation: Business Support provides 24/7 access and production‑level guidance without Enterprise features.

1368) A startup wants free access to documentation, whitepapers, and forums, but no direct support. Which plan applies? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: A Explanation: Basic Support provides free access to documentation and forums.

1369) A company wants proactive account management, a Technical Account Manager (TAM), and access to the Concierge team for billing support. Which plan applies? A. Basic B. Developer C. Business D. Enterprise

Correct Answer: D Explanation: Enterprise Support includes TAMs and Concierge services.

Shared Responsibility Model — Comprehensive Scenarios
1370) A hospital is migrating patient records to AWS. They use RDS for databases, EC2 for application servers, and S3 for backups. Regulators ask: who patches the RDS database engine, who secures the physical servers, and who configures IAM policies for doctors? A. AWS manages all responsibilities including patching, physical security, and IAM B. Customers manage all responsibilities including patching, physical security, and IAM C. AWS patches RDS and secures servers; Customers configure IAM policies D. Customers patch RDS and configure IAM; AWS secures servers

Correct Answer: C Explanation: AWS patches managed services like RDS and secures infrastructure. Customers manage IAM policies.

1371) A fintech startup runs EC2 instances for payment processing. Regulators ask who patches the guest operating system, who encrypts data stored in S3, and who secures the hypervisor. A. AWS patches OS, encrypts S3, and secures hypervisor B. Customers patch OS and encrypt S3; AWS secures hypervisor C. AWS patches OS and secures hypervisor; Customers encrypt S3 D. Customers patch OS, encrypt S3, and secure hypervisor

Correct Answer: B Explanation: Customers patch EC2 OS and configure S3 encryption. AWS secures the virtualization layer.

1372) A university wants to monitor API calls in their AWS account. Who enables CloudTrail, who secures the data centers, and who manages IAM credentials? A. AWS enables CloudTrail, secures data centers, and manages IAM B. Customers enable CloudTrail and manage IAM; AWS secures data centers C. Customers enable CloudTrail, secure data centers, and manage IAM D. AWS enables CloudTrail and manages IAM; Customers secure data centers

Correct Answer: B Explanation: Customers enable CloudTrail and manage IAM. AWS secures physical infrastructure.

1373) A logistics company uses DynamoDB for supply chain data. Who patches the database software, who encrypts data at rest, and who secures the physical servers? A. AWS patches DynamoDB and secures servers; Customers configure encryption B. Customers patch DynamoDB and configure encryption; AWS secures servers C. AWS patches DynamoDB, encrypts data, and secures servers D. Customers patch DynamoDB; AWS encrypts data and secures servers

Correct Answer: A Explanation: AWS manages DynamoDB software and infrastructure. Customers configure encryption settings.

1374) A healthcare provider wants to ensure compliance. Who provides compliance certifications, who configures IAM policies, and who secures the hypervisor? A. AWS provides certifications and secures hypervisor; Customers configure IAM B. Customers provide certifications and configure IAM; AWS secures hypervisor C. AWS provides certifications, configures IAM, and secures hypervisor D. Customers provide certifications, configure IAM, and secure hypervisor

Correct Answer: A Explanation: AWS provides compliance certifications and secures infrastructure. Customers configure IAM.

1375) A startup wants to configure firewall rules for workloads, encrypt data in S3, and patch EC2 operating systems. Who is responsible? A. AWS B. Customer C. Both D. Third‑party vendor

Correct Answer: B Explanation: Customers configure firewalls, encryption, and patch EC2 OS.

1376) A government agency wants to ensure physical security of AWS data centers, patch EC2 operating systems, and enable CloudTrail. Who is responsible? A. AWS manages all responsibilities B. Customers manage all responsibilities C. AWS secures data centers; Customers patch OS and enable CloudTrail D. Customers secure data centers; AWS patches OS and enables CloudTrail

Correct Answer: C Explanation: AWS secures infrastructure. Customers patch EC2 OS and enable CloudTrail.

1377) A bank wants to ensure workloads are secure. Who manages IAM credentials, who secures the virtualization layer, and who provides compliance certifications? A. AWS manages IAM, virtualization, and certifications B. Customers manage IAM; AWS secures virtualization and provides certifications C. AWS manages IAM and certifications; Customers secure virtualization D. Customers manage IAM and certifications; AWS secures virtualization

Correct Answer: B Explanation: Customers manage IAM. AWS secures virtualization and provides certifications.

1378) A media company wants to ensure workloads are resilient. Who patches RDS, who encrypts S3, and who secures physical servers? A. AWS patches RDS and secures servers; Customers encrypt S3 B. Customers patch RDS and encrypt S3; AWS secures servers C. AWS patches RDS, encrypts S3, and secures servers D. Customers patch RDS; AWS encrypts S3 and secures servers

Correct Answer: A Explanation: AWS manages RDS and infrastructure. Customers configure S3 encryption.

1379) A university wants to ensure workloads are compliant. Who enables CloudTrail, who secures hypervisor, and who manages IAM policies? A. AWS enables CloudTrail, secures hypervisor, and manages IAM B. Customers enable CloudTrail and manage IAM; AWS secures hypervisor C. Customers enable CloudTrail, secure hypervisor, and manage IAM D. AWS enables CloudTrail and manages IAM; Customers secure hypervisor

Correct Answer: B Explanation: Customers enable CloudTrail and manage IAM. AWS secures virtualization.

1380) A logistics company wants to ensure workloads are secure. Who patches DynamoDB, who configures IAM, and who secures physical servers? A. AWS patches DynamoDB and secures servers; Customers configure IAM B. Customers patch DynamoDB and configure IAM; AWS secures servers C. AWS patches DynamoDB, configures IAM, and secures servers D. Customers patch DynamoDB; AWS configures IAM and secures servers

Correct Answer: A Explanation: AWS manages DynamoDB and infrastructure. Customers configure IAM.

1381) A healthcare provider wants to ensure workloads are compliant. Who provides compliance certifications, who encrypts S3, and who manages IAM? A. AWS provides certifications; Customers encrypt S3 and manage IAM B. Customers provide certifications and encrypt S3; AWS manages IAM C. AWS provides certifications and encrypts S3; Customers manage IAM D. Customers provide certifications; AWS encrypts S3 and manages IAM

Correct Answer: A Explanation: AWS provides compliance certifications. Customers configure S3 encryption and IAM.

1382) A startup wants to ensure workloads are resilient. Who patches EC2 OS, who secures hypervisor, and who enables CloudTrail? A. AWS patches OS, secures hypervisor, and enables CloudTrail B. Customers patch OS and enable CloudTrail; AWS secures hypervisor C. Customers patch OS; AWS secures hypervisor and enables CloudTrail D. AWS patches OS and secures hypervisor; Customers enable CloudTrail

Correct Answer: B Explanation: Customers patch EC2 OS and enable CloudTrail. AWS secures virtualization.

1383) A government agency wants to ensure workloads are secure. Who patches RDS, who manages IAM, and who secures physical servers? A. AWS patches RDS and secures servers; Customers manage IAM B. Customers patch RDS and manage IAM; AWS secures servers C. AWS patches RDS, manages IAM, and secures servers D. Customers patch RDS; AWS manages IAM and secures servers

Correct Answer: A Explanation: AWS manages RDS and infrastructure. Customers manage IAM.

1384) A bank wants to ensure workloads are compliant. Who provides compliance certifications, who patches EC2 OS, and who encrypts S3? A. AWS provides certifications; Customers patch OS and encrypt S3 B. Customers provide certifications and patch OS; AWS encrypts S3 C. AWS provides certifications and patches OS; Customers encrypt S3 D. Customers provide certifications; AWS patches OS and encrypts S3

Correct Answer: A Explanation: AWS provides compliance certifications. Customers patch EC2 OS and configure S3 encryption.

1385) A media company wants to ensure workloads are resilient. Who patches DynamoDB, who enables CloudTrail, and who secures hypervisor? A. AWS patches DynamoDB and secures hypervisor; Customers enable CloudTrail B. Customers patch DynamoDB and enable CloudTrail; AWS secures hypervisor C. AWS patches DynamoDB, enables CloudTrail, and secures hypervisor D. Customers patch DynamoDB; AWS enables CloudTrail and secures hypervisor

Correct Answer: A Explanation: AWS manages DynamoDB and virtualization. Customers enable CloudTrail.