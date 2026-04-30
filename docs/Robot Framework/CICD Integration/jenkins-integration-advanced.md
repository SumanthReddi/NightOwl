---
sidebar_position: 2
title: Jenkins Integration
description: Production-grade Jenkins integration for Robot Framework with reliable pipeline design, Docker/K8s agents, parallel execution, artifacts, and quality gates.
---

# Robot Framework: Jenkins Integration

> Jenkins failures are rarely test failures.  
> They are usually pipeline design or environment problems.

---

## 🎯 Why This Matters

Common issues teams face:

- Works locally but fails in Jenkins  
- Node/environment inconsistency  
- Slow pipelines  
- Missing reports  
- Random failures in parallel runs  

> Stable automation requires stable CI infrastructure.

---

# 🧱 Production Jenkins Model

```text
Layer 1 → Node / Agent Strategy
Layer 2 → Pipeline Design
Layer 3 → Test Execution & Distribution
Layer 4 → Reporting & Quality Gates
```

---

# 1️⃣ Node / Agent Strategy (Foundation)

## ❌ Bad Practice

```groovy
sh 'sudo apt-get update'
sh 'pip install -r requirements.txt'
```

Problems:

- inconsistent environments  
- dependency drift  
- slow builds  

---

## ✅ Better: Docker-Based Agents

```groovy
pipeline {
  agent {
    docker {
      image 'robotframework/robotframework:latest'
    }
  }

  stages {
    stage('Test') {
      steps {
        sh 'robot tests/'
      }
    }
  }
}
```

---

## ✅ Advanced: Kubernetes Agents

```groovy
agent {
  kubernetes {
    label 'robot-node'
    yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: robot
    image: robotframework/robotframework
    command:
    - cat
    tty: true
'''
  }
}
```

---

## Key Principles

- no OS-level installs in pipeline  
- immutable environments  
- same setup for every run  

---

# 2️⃣ Pipeline Design

## ❌ Scripted Pipeline

```groovy
node {
  stage('Test') {
    sh 'robot tests/'
  }
}
```

Hard to maintain and scale.

---

## ✅ Declarative Pipeline

```groovy
pipeline {
  agent any

  options {
    timeout(time: 30, unit: 'MINUTES')
    retry(2)
  }

  parameters {
    string(name: 'ENV', defaultValue: 'staging')
  }

  stages {
    stage('Setup') {
      steps {
        sh 'pip install -r requirements.txt'
      }
    }

    stage('Test') {
      steps {
        sh 'robot --variable ENV:${ENV} tests/'
      }
    }
  }
}
```

---

## Use Shared Libraries (Recommended)

```groovy
@Library('robot-shared') _
```

Benefits:

- reuse logic  
- cleaner pipelines  
- consistent patterns  

---

# 3️⃣ Test Execution & Distribution

## ❌ Sequential Execution

```groovy
sh 'robot tests/'
```

Slow for large suites.

---

## ✅ Parallel Stages

```groovy
stage('Tests') {
  parallel {
    stage('API') {
      steps {
        sh 'robot tests/api'
      }
    }
    stage('UI') {
      steps {
        sh 'robot tests/ui'
      }
    }
  }
}
```

---

## ✅ With Pabot

```bash
pabot --processes 4 tests/
```

---

## ⚠️ Critical Rule

Parallel issues come from:

- shared test data  
- same DB records  
- static users  

👉 Always generate unique data.

---

# 4️⃣ Artifacts & Reporting

## Store Results

```groovy
post {
  always {
    archiveArtifacts artifacts: 'reports/**'
    junit 'reports/output.xml'
  }
}
```

---

## Why Important

- debugging  
- history tracking  
- CI dashboards  

---

# 5️⃣ Quality Gates

```groovy
stage('Quality Gate') {
  when {
    branch 'main'
  }
  steps {
    script {
      def result = readFile('reports/status.txt').trim()
      if (result != 'PASS') {
        error "Quality gate failed"
      }
    }
  }
}
```

---

# 📁 Recommended Structure

```text
Jenkinsfile
tests/
resources/
reports/
requirements.txt
```

---

# ⚠️ Common Problems

## Environment Mismatch

- different Python versions  
- missing dependencies  

---

## Flaky Parallel Runs

- shared test data  
- DB conflicts  

---

## Missing Reports

- wrong path  
- job failed before archiving  

---

## Slow Pipelines

- no parallelization  
- heavy setup  

---

# ❌ Common Mistakes

- hardcoded installs in pipeline  
- using scripted pipelines unnecessarily  
- no artifacts  
- shared test data  
- no retry strategy  

---

# ✅ Best Practices

- use Docker/K8s agents  
- prefer declarative pipelines  
- split jobs logically  
- enable parallel execution  
- store reports  
- isolate test data  

---

# 📈 Maturity Model

## Beginner
Single pipeline, sequential execution.

## Intermediate
Separate jobs (API/UI), basic reporting.

## Advanced
Parallel execution, Docker agents, artifacts.

## Expert
K8s agents, shared libraries, quality gates, scalable pipelines.

---

# 💡 Practical Insight

When Jenkins pipelines fail:

Check in this order:

1. environment setup  
2. pipeline structure  
3. test data isolation  
4. parallel execution  

Tests are rarely the root cause.

---

# 🏁 Final Verdict

Good Jenkins integration turns automation into a reliable system.

Strong setup gives:

- stable execution  
- faster feedback  
- scalable testing  
- trustworthy pipelines  

Weak setup creates noise and false failures.

---

# 📚 What To Learn Next

1. GitLab CI Pipelines  
2. GitHub Actions  
3. Test Reporting Strategy  
4. Parallel Execution Deep Dive  
5. Full CI/CD Architecture  

---

## Summary

> Tests validate functionality.  
> CI pipelines validate reliability.
